import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Table from "./components/table/table";
import type { IncomeEntry } from "./types";

function App() {

  const [incomeData, setIncomeData] = useState<IncomeEntry[]>(
    () => {
      const stored = localStorage.getItem( "bdgt-income" );
      return stored ? JSON.parse( stored ) : [];
    }
  );

  const totalIncome = useMemo(
    () => incomeData.reduce((sum, e) => sum + e.sum, 0),
    [incomeData]
  );

  const removeIncome = (id: string) => {
    setIncomeData(prev =>
      prev.filter(entry => entry.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('bdgt-income', JSON.stringify(incomeData));
  }, [incomeData]);

  useEffect(() => {
    localStorage.setItem('bdgt-total', JSON.stringify(totalIncome));
  }, [totalIncome]);

  const handleIncomeSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll( "input" );

    const title = inputs[0].value.trim();
    const sum = parseInt( inputs[1].value, 10 );
    const date = parseInt( inputs[2].value, 10 );

    if ( !title || isNaN( sum) || isNaN(date) ) {
      return;
    }

    const newEntry: IncomeEntry = { id: crypto.randomUUID(), title, sum, date };

    setIncomeData( prev => [ ...prev, newEntry ] );

    form.reset();
  };

  return (
    <>
      <div>
        <h1>bdgt</h1>

        <form onSubmit={handleIncomeSubmit}>
          <legend>Income</legend>

          <input
            className="input--title"
            type="text"
            placeholder="Add income title"
          />

          <input
            className="input--sum"
            type="number"
            placeholder="Add income amount per month"
          />

          <input
            className="input--date"
            type="number"
            min="1"
            max="31"
            placeholder="Add income date"
          />

          <button type="submit">Add Income</button>
        </form>

        <Table incomeData={ incomeData } totalIncome={ totalIncome } onRemove={ removeIncome } />
      </div>
    </>
  );
}

export default App;

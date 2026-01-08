import { useState, useEffect } from "react";
import "./App.css";

type IncomeEntry = {
  title: string;
  sum: number;
  date: number;
};

function App() {

  const [incomeData, setIncomeData] = useState<IncomeEntry[]>([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    localStorage.setItem( "bdgt", JSON.stringify( incomeData ) );
  }, [ incomeData, totalIncome ] );

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

    const newEntry: IncomeEntry = { title, sum, date };

    setIncomeData( prev => [ ...prev, newEntry ] );
    setTotalIncome( prev => prev + sum );

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

          <button type="submit">Add</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Remove?</th>
            </tr>
          </thead>

          <tbody>
            {incomeData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.title}</td>
                <td>{entry.sum}</td>
                <td>{entry.date}</td>
                <td>&times;</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>
                <strong>Total</strong>
              </th>
              <th>{totalIncome}</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Form from "./components/form/form";
import Table from "./components/table/table";
import type { TableEntry } from "./types";

function App() {

  const [incomeData, setIncomeData] = useState<TableEntry[]>(
    () => {
      const stored = localStorage.getItem( "bdgt-income" );
      return stored ? JSON.parse( stored ) : [];
    }
  );

  const totalIncome = useMemo(
    () => incomeData.reduce( ( sum, e ) => sum + e.sum, 0 ),
    [incomeData]
  );

  const removeIncome = (id: string) => {
    setIncomeData(prev =>
      prev.filter(entry => entry.id !== id)
    );
  };

  const [costData, setCostData] = useState<TableEntry[]>(
    () => {
      const stored = localStorage.getItem( "bdgt-costs" );
      return stored ? JSON.parse( stored ) : [];
    }
  );

  const totalCosts = useMemo(
    () => costData.reduce( ( sum, e ) => sum + e.sum, 0 ),
    [costData]
  );

  const removeCost = (id: string) => {
    setCostData(prev =>
      prev.filter(entry => entry.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('bdgt-income', JSON.stringify(incomeData));
  }, [incomeData]);

  useEffect(() => {
    localStorage.setItem('bdgt-income-total', JSON.stringify(totalIncome));
  }, [totalIncome]);

  useEffect(() => {
    localStorage.setItem('bdgt-costs', JSON.stringify(costData));
  }, [costData]);

  useEffect(() => {
    localStorage.setItem('bdgt-costs-total', JSON.stringify(totalCosts));
  }, [totalCosts]);

  return (
    <>
      <div>
        <h1>bdgt</h1>
        <div>
          <p>Welcome to <strong>bdgt</strong>, your monthly budget forecaster.</p>
        </div>

        <Form formType="income" setFormData={ setIncomeData } />
        <Table tableData={ incomeData } totalValue={ totalIncome } onRemove={ removeIncome } />

        <Form formType="costs" setFormData={ setCostData } />
        <Table tableData={ costData } totalValue={ totalCosts } onRemove={ removeCost } />
      </div>
    </>
  );
}

export default App;

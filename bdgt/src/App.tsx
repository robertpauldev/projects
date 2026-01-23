import "./App.css";
import styles from "./app.module.scss";
import Form from "./components/form/form";
import Table from "./components/table/table";
import { useBudgetCategory } from "./hooks/hooks";

function App() {

  const income = useBudgetCategory("bdgt-income");
  const costs  = useBudgetCategory("bdgt-costs");
  const goals  = useBudgetCategory("bdgt-goals");


  const remainingIncome =
    income.total - costs.total - goals.total;

  return (
    <div className={styles.app}>
      <div className={styles.app__wrap}>
        <h1>bdgt</h1>

        <p>
          Welcome to <strong>bdgt</strong>, your monthly budget forecaster.
        </p>

        <section className={styles.app__section}>
          <Form formType="income" onAdd={income.add} />
          <Table
            tableType="income"
            tableData={income.data}
            totalValue={income.total}
            onRemove={income.remove}
          />
        </section>

        <section className={styles.app__section}>
          <Form formType="cost" onAdd={costs.add} />
          <Table
            tableType="cost"
            tableData={costs.data}
            totalValue={costs.total}
            onRemove={costs.remove}
          />
        </section>

        <section className={styles.app__section}>
          <Form
            formType="goal"
            onAdd={goals.add}
            remainingIncome={remainingIncome}

          />
          <Table
            tableType="goal"
            tableData={goals.data}
            totalValue={goals.total}
            onRemove={goals.remove}
          />
        </section>
      </div>
    </div>
  );
}

export default App;

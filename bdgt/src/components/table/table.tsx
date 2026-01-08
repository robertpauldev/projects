import type { IncomeEntry } from "../../types";

type Props = {
  incomeData: IncomeEntry[];
  totalIncome: number;
  onRemove: (id: string) => void;
};

const Table = ( { incomeData, totalIncome, onRemove }: Props ) => {
  return (
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
        { incomeData.map((entry: IncomeEntry, index: number ) => (
          <tr key={index}>
            <td>{entry.title}</td>
            <td>{entry.sum}</td>
            <td>{entry.date}</td>
            <td>
              <button onClick={ () => onRemove( entry.id ) }>&times;</button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th>
            <strong>Total</strong>
          </th>
          <th>{ totalIncome }</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;

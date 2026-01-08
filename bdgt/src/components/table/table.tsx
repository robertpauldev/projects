import type { TableEntry } from "../../types";

type Props = {
  tableData: TableEntry[];
  totalValue: number;
  onRemove: (id: string) => void;
};

const Table = ( { tableData, totalValue, onRemove }: Props ) => {
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
        { tableData.map((entry: TableEntry, index: number ) => (
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
          <th>{ totalValue.toFixed( 2 ) }</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;

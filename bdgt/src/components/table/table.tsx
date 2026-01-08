import type { TableEntry } from "../../types";

type Props = {
  tableData: TableEntry[];
  totalValue: number;
  onRemove: (id: string) => void;
};

const ordinalSuffixDate = ( date: number ) => {
  switch ( date ) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${ date }th`;
  }
}

const Table = ( { tableData, totalValue, onRemove }: Props ) => {

  if ( totalValue === 0 ) {
    return;
  }

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

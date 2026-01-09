import type { TableEntry } from "../../types";
import { ordinalSuffixDate } from "../../utils/utils";
import { constants } from "../../utils/constants";
import styles from "./table.module.scss";

type Props = {
  tableType: string;
  tableData: TableEntry[];
  totalValue: number;
  onRemove: ( id: string ) => void;
};

const Table = ( { tableType, tableData, totalValue, onRemove }: Props ) => {

  if ( totalValue === 0 ) {
    return;
  }

  return (
    <table className={ styles['table'] }>
      <thead className={ styles['table__head'] }>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>&nbsp;</th>
        </tr>
      </thead>

      <tbody className={ styles['table__body'] }>
        { tableData.map( ( entry: TableEntry, index: number ) => (
          <tr key={ index }>
            <td>{ entry.title }</td>
            <td className={ styles["table__td--numeric"] }>{ entry.sum }</td>
            <td className={ styles["table__td--numeric"] }>{ ordinalSuffixDate( entry.date ) }</td>
            <td className={ styles["table__td--numeric"] }>
              <button
                className={ styles["table__button"] }
                onClick={ () => onRemove( entry.id ) }
              >Remove</button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className={ styles['table__footer'] }>
        <tr>
          <th>
            <strong>Total { `${ tableType }s` }</strong>
          </th>
          <th className={ styles["table__th--numeric"] }>{ `${ constants.CURRENCY }${ totalValue.toFixed( 2 ) }` }</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;

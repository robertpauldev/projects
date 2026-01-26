import type { TableEntry } from "../../utils/types";
import { ordinalSuffixDate, pluraliseString } from "../../utils/utils";
import { constants } from "../../utils/constants";
import styles from "./table.module.scss";

type Props = {
  tableType: "income" | "cost" | "goal";
  tableData: TableEntry[];
  totalValue: number;
  onRemove: (id: string) => void;
};

const Table = ({ tableType, tableData, totalValue, onRemove }: Props) => {

  if (!tableData.length) {
    return null;
  }

  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Amount</th>
          {tableType !== "goal" && <th>Date</th>}
          <th />
        </tr>
      </thead>

      <tbody className={styles.table__body}>
        {tableData.map((entry, index) => (
          <tr key={entry.id}>
            <td>{index + 1}</td>
            <td>{entry.title}</td>
            <td className={styles["table__cell--right"]}>
              {entry.sum.toFixed(2)}
            </td>
            {tableType !== "goal" && (
              <td className={styles["table__cell--right"]}>
                {ordinalSuffixDate(entry.date)}
              </td>
            )}
            <td className={styles["table__cell--right"]}>
              <button
                className={styles.table__button}
                onClick={() => onRemove(entry.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className={styles.table__footer}>
        <tr>
          <th />
          <th className={styles["table__cell--right"]}>
            Total {pluraliseString(tableType)}
          </th>
          <th className={styles["table__cell--right"]}>
            {constants.CURRENCY}
            {totalValue.toFixed(2)}
          </th>
          {tableType !== "goal" && <th />}
          <th />
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;

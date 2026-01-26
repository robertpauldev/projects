import { useState } from "react";
import { costTypes, type TableEntry } from "../../utils/types";
import { constants } from "../../utils/constants";
import { pluraliseString } from "../../utils/utils";
import styles from "./form.module.scss";

type Props = {
  formType: "income" | "cost" | "goal";
  onAdd: (entry: TableEntry) => void;
  remainingIncome?: number;
};

const Form = ({ formType, onAdd, remainingIncome }: Props) => {

  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");
  const [costType, setCostType] = useState(costTypes[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedSum = parseFloat(sum);

    if (!title.trim() || Number.isNaN(parsedSum)) {
      return;
    }

    const entry: TableEntry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      sum: parsedSum,
    };

    if (formType === "cost") {
      entry.type = costType;
    }

    if (formType !== "goal") {
      entry.date = new Date(date).getDate();
    }

    onAdd(entry);

    setTitle("");
    setSum("");
    setDate("");
    setCostType(costTypes[0]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <legend className={styles.form__legend}>
        {pluraliseString(formType)}
      </legend>

      <fieldset className={styles.form__fieldset}>
        <p className={styles.form__intro}>
          Enter all {pluraliseString(formType)} for this month.
        </p>

        {formType === "goal" && remainingIncome !== undefined && (
          <p className={styles.form__forecast}>
            You have{" "}
            <strong>
              {constants.CURRENCY}
              {remainingIncome.toFixed(2)}
            </strong>{" "}
            income remaining after costs this month.
          </p>
        )}

        <div className={styles.form__row}>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {formType === "cost" && (
            <select
              className={styles.form__select}
              value={costType}
              onChange={(e) => setCostType(e.target.value)}
            >
              {costTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          )}

          <input
            className={styles.form__input}
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder={formType}
            value={sum}
            onChange={(e) => setSum(e.target.value)}
          />

          {formType !== "goal" && (
            <input
              className={styles.form__input}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          )}

          <button className={styles.form__button} type="submit">
            Add {formType}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;

import { costTypes, type CostType, type TableEntry } from "../../utils/types";
import styles from "./form.module.scss";

type Props = {
  formType: string;
  setFormData: Function;
}

const Form = ( { formType, setFormData }: Props ) => {

  const handleIncomeSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll( "input" );
    const select = form.querySelector( "select" );

    const title = inputs[0].value.trim();
    const type: CostType = select?.value;

    const sum   = parseFloat( inputs[1].value );
    const date  = parseInt( inputs[2].value.slice(-2), 10 );
    console.log(date);
    // const date  = parseInt( inputs[2].value, 10 );

    if ( !title || isNaN( sum) || isNaN(date) ) {
      return;
    }

    const newEntry: TableEntry = {
      id: crypto.randomUUID(),
      type,
      title,
      sum,
      date
    };

    setFormData( prev => [ ...prev, newEntry ] );

    form.reset();
  };

  return (
    <form className={ styles["form"] } onSubmit={handleIncomeSubmit}>
      <legend className={ styles["form__legend"] }>{ formType }</legend>

      <fieldset className={ styles["form__fieldset"] }>
        <p className={ styles["form__intro"] }>{ `Enter all ${ formType }s for this month.` }</p>

        <div className={ styles["form__row"] }>
          <input
            className={ styles["form__input"] }
            type="text"
            placeholder="Title"
          />

          { formType === "cost" ?
            <select className={ styles["form__select"] }>
              {
                costTypes.map(
                  ( i, index ) => <option key={ index } value={ i }>{ i }</option>
                )
              }
            </select> : ""
          }

          <input
            className={ styles["form__input"] }
            type="number"
            min="0"
            step="0.01"
            placeholder={ formType }
          />

          <input
            className={ styles["form__input"] }
            type="date"
            placeholder="Date"
          />

          <button
            className={ styles["form__button"] }
            type="submit"
          >
            <span className={ styles["form__button-label"] }>Add { formType }</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
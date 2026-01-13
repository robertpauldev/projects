import { costTypes, type TableEntry } from "../../utils/types";
import { constants } from "../../utils/constants";
import { pluraliseString } from "../../utils/utils";
import styles from "./form.module.scss";

type Props = {
  formType: string;
  setFormData: Function;
  data: Array<T>;
}

const Form = ( { formType, setFormData, data }: Props ) => {

  const handleIncomeSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll( "input" );
    const title = inputs[0].value.trim();
    const sum   = parseFloat( inputs[1].value );

    if ( !title || isNaN( sum ) ) {
      return;
    }

    const newEntry: TableEntry = {
      id: crypto.randomUUID(),
      title,
      sum,
    };

    if ( formType === "cost" ) {
      const select = form.querySelector( "select" );
      newEntry["type"] = select?.value;
    }

    if ( formType !== "goal" ) {
      newEntry["date"] = parseInt( inputs[2].value.slice(-2), 10 );
    }

    console.log( formType, newEntry );

    setFormData( prev => [ ...prev, newEntry ] );

    form.reset();
  };

  return (
    <form className={ styles["form"] } onSubmit={handleIncomeSubmit}>
      <legend className={ styles["form__legend"] }>{ pluraliseString( formType ) }</legend>

      <fieldset className={ styles["form__fieldset"] }>
        <p className={ styles["form__intro"] }>{ `Enter all ${ pluraliseString( formType ) } for this month.` }</p>

        { formType === "goal" ?
          <p>You have <strong>{ `${ constants.CURRENCY }${ ( data[0] - data[1] - data[2] ).toFixed( 2 ) }` }</strong> remaining this month.</p>
        : "" }

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
            </select>
            : ""
          }

          <input
            className={ styles["form__input"] }
            type="number"
            min="0"
            step="0.01"
            placeholder={ formType }
          />

          { formType !== "goal" ?
          <input
            className={ styles["form__input"] }
            type="date"
            placeholder="Date"
          />
          : "" }

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
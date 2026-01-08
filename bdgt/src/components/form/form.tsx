// import { useEffect, useMemo } from "react";
import type { TableEntry } from "../../types";

type Props = {
  formType: string;
  setFormData: Function;
}

const Form = ( { formType, setFormData }: Props ) => {

  const handleIncomeSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll( "input" );

    const title = inputs[0].value.trim();
    const sum = parseFloat( inputs[1].value );
    const date = parseInt( inputs[2].value, 10 );

    if ( !title || isNaN( sum) || isNaN(date) ) {
      return;
    }

    const newEntry: TableEntry = { id: crypto.randomUUID(), title, sum, date };

    setFormData( prev => [ ...prev, newEntry ] );

    form.reset();
  };

  return (
    <form onSubmit={handleIncomeSubmit}>
      <legend>{ formType }</legend>

      <input
        className="input--title"
        type="text"
        placeholder={ `Add ${ formType } title` }
      />

      <input
        className="input--sum"
        type="number"
        min="0"
        step="0.01"
        placeholder={ `Add ${ formType } amount per month` }
      />

      <input
        className="input--date"
        type="number"
        min="1"
        max="31"
        placeholder={ `Add ${ formType } date` }
      />

      <button type="submit">Add { formType }</button>
    </form>
  );
}

export default Form;
import { useState, useEffect } from "react";
import roles from "../../data/roles";
import { slugifyString } from "../../utils/utils";
import styles from "./data.module.scss";

const Data: React.FC = () => {

  const [ role, setRole ] = useState( "" );

  useEffect(
    () => {

      const member = document.querySelectorAll( ".member" );

      member.forEach(
        m => {

          if ( role === "" ) {
            return m.setAttribute( "data-show", "true" );
          }

          return m.getAttribute( "data-role" ) !== role
            ? m.setAttribute( "data-show", "false" )
            : m.setAttribute( "data-show", "true" );
        }
      );
    },
    [ role ]
  );

  const handleChange = ( e: React.ChangeEvent<HTMLSelectElement> ) => {
    setRole( e?.target?.value ?? "" );
  }

  const handleClear = () => {
    setRole( "" );
  }

  return (
    <div className={ styles.data }>
      <h2 className={ styles["data__title"] }>Data</h2>
      <h3>Filter by Role</h3>
      <select className={ styles["data__select"] } onChange={ handleChange }>
        <option key={ `option-default` } value="">-- Select --</option>
        {
          roles.map(
            ( role, index ) =>
            <option
              key={ index }
              className={ styles["data__option"] }
              value={ slugifyString( role ) }
            >{ role }</option>
          )
        }
      </select>
      <button onClick={ handleClear }>Clear filtering</button>
    </div>
  );
}

export default Data;
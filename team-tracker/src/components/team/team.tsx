// Data
import { type Member, createMember } from "../../data/members";

// Styles
import styles from "./team.module.scss";

const theMembers: Member[] = [];

for ( let i = 0; i < 10; i++ ) {
  theMembers.push( createMember() );
}

const Team = () => {
  return (
    <div className={ styles["team-wrap"] }>
      <h2 className={ styles["team__title"] }>Meet the team</h2>
      <ul className={ styles["team__members"] }>
        {
          theMembers.map( ( data ) => (
            <li>
              <img src={ data.avatar } />
              <h3>{ `${ data.firstName } ${ data.lastName }` }</h3>
              <h4>{ data.role }</h4>
            </li>
           ) )
        }
      </ul>
    </div>
  );
}

export default Team;
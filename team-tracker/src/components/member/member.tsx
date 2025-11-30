import React from "react";
import { type MemberType } from "../../data/members";
import styles from "./member.module.scss";
import { slugifyString } from "../../utils/utils";

interface MemberProps {
  member: MemberType;
}

const Member: React.FC<MemberProps> = ({ member }) => {

  const fullName = `${ member.firstName } ${ member.lastName }`;

  return (
    <li
      className={ `member ${ styles.member }` }
      data-show={ `true` } 
      data-role={ slugifyString( member.role ) }
    >
      <img className={ styles["member__avatar"] } src={ member.avatar } alt={ fullName } />
      <h3 className={ styles["member__name"] }>{ fullName }</h3>
      <h4 className={ styles["member__role"] }>{ member.role }</h4>
      <ul className={ styles["member__meta"] }>
        <li className={ styles["member__meta-location"] }>
          <span>{ member.location }</span>
        </li>
        <li className={ styles["member__meta-github"] }>
          <span>{ member.gitHub }</span>
        </li>
      </ul>
    </li>
  );
};

export default Member;
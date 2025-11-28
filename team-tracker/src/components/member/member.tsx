// Components/member/Member.tsx
import React from "react";
import { type MemberType } from "../../data/members";
import styles from "./member.module.scss";

interface MemberProps {
  member: MemberType;
}

const Member: React.FC<MemberProps> = ({ member }) => {

  const fullName = `${ member.firstName } ${ member.lastName }`;

  return (
    <li className={styles.member}>
      <img className={ styles["member__avatar"] } src={ member.avatar } alt={ fullName } />
      <h3 className={ styles["member__name"] }>{ fullName }</h3>
      <h4 className={ styles["member__role"] }>{ member.role }</h4>
      <p className={ styles["member__location"] }>{ member.location }</p>
    </li>
  );
};

export default Member;
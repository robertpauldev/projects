import { useState } from "react";
import { type MemberType, createMember } from "../../data/members";
import Member from "../member/member";
import styles from "./team.module.scss";

const getMembers = () => {

  const cachedMembers = sessionStorage.getItem( "cached-members" );

  if ( cachedMembers ) {
    return JSON.parse( cachedMembers );
  }

  const theMembers: MemberType[] = Array.from({ length: 30 }, () => createMember());

  sessionStorage.setItem( "cached-members", JSON.stringify( theMembers ) );

  return theMembers;
}

const Team: React.FC = () => {

  const [ members ] = useState( () => getMembers() );

  return (
    <div className={styles["team"]}>
      <h2 className={styles["team__title"]}>Meet the team</h2>
      <ul className={styles["team__members"]}>
        {members.map((member: MemberType) => (
          <Member key={member._id} member={member} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
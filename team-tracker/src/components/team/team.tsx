import React from "react";
import { type MemberType, createMember } from "../../data/members";
import Member from "../member/member";
import styles from "./team.module.scss";

const theMembers: MemberType[] = Array.from({ length: 30 }, () => createMember());

const Team: React.FC = () => {
  return (
    <div className={styles["team-wrap"]}>
      <h2 className={styles["team__title"]}>Meet the team</h2>
      <ul className={styles["team__members"]}>
        {theMembers.map((member) => (
          <Member key={member._id} member={member} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
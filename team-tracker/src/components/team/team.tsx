import styles from "./team.module.scss";

const Team = () => {
  return (
    <div className={ styles["team-wrap"] }>
      <h2 className={ styles["team__title"] }>Meet the team</h2>
      <ul className={ styles["team__members"] } />
    </div>
  );
}

export default Team;
import Card from "../Card/Card";
import styles from "./Stage.module.scss";

const Stage = () => {
  return (
    <section className={styles.stage}>
      <article>
        <Card />
      </article>
    </section>
  );
};

export default Stage;

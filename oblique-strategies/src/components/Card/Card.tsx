import { useState } from "react";
import { theStrategies } from "../../data/strategies";
import { useSmartTextAlign } from "../../hooks/hooks";

import styles from "./Card.module.scss";

const Card = () => {
  const { ref, isWrapped } = useSmartTextAlign();

  const randomCard = () => {
    return theStrategies[Math.floor(Math.random() * theStrategies.length)];
  };

  const [theCard, setTheCard] = useState(randomCard);

  const flipCard = () => setTheCard(randomCard);

  return (
    <button className={styles.card} onClick={flipCard}>
      <span
        ref={ref}
        className={`
          ${styles["card__label"]} 
          ${
            styles[isWrapped ? "card__label--wrapped" : "card__label--single"]
          }`}
      >
        {theCard}
      </span>
    </button>
  );
};

export default Card;

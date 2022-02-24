import React from "react";
import s from "../css/Card.module.css";
import CardImage from "./CardImage";

const Card = ({ image, id, title, description }) => {
  return (
    <div className={s.cardContainer}>
      <CardImage image={image} id={id} />
      <div className={s.info}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

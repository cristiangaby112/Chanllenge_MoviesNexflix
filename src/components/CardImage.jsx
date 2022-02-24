import React from "react";
import s from "../css/Card.module.css";
import { Link } from "react-router-dom";

const CardImage = ({ image, id }) => {
  return (
    <div className={s.card_img}>
      <Link to={"/details/" + id}>
        <img src={image} className={s.img} alt="img not found" />
      </Link>
    </div>
  );
};

export default CardImage;

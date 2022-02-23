import React from 'react';
import s from '../css/Card.module.css';
import { Link } from "react-router-dom";

const Card = ({image, id, title, description}) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.card_img}>
        <Link to={'/details/' + id}>
        <img src={image} className={s.img} alt="img not found"/>
        </Link>
      </div>
      <div className={s.info}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default Card;
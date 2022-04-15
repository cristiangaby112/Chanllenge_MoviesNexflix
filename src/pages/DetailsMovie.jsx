import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import s from "../css/DetailsMovie.module.css";

export const DetailsMovie = (props) => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details) || []
  console.log("soy la detail", details);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  if (details.length === 0) {
    return (
    <div className={s.load}>
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </div>)
    }
  return (
    <div>
      <div className={s.cardContainer}>
        <div className={s.container_img}>
          <img src={details.image} className={s.img} alt="" />
        </div>
        <div className={s.container_info}>
          <h1>{details.title}</h1>
          <p>{details.plot}</p>
        </div>
      </div>
    </div>
  );
};

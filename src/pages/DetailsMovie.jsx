import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import NavBar from "../components/NavBar";
import s from "../css/DetailsMovie.module.css";

export const DetailsMovie = (props) => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details) || [];
  console.log("soy la detail", details);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

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

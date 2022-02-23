import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/index";
import { useHistory } from "react-router-dom";

const loading = () => {

  const dispatch = useDispatch();
  const allMovies= useSelector((state) => state.movies.items);
  const history = useHistory();

  useEffect(() =>{
    dispatch(getMovies());
  }, [dispatch])

  return (
    <div>
      {allMovies.length === 0 ? null : history.push("/")}
      <h1>loading...</h1>
    </div>
  )
}

export default loading;
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/index";
import CardImage from "../components/CardImage";
import Paged from "../components/Paged";
import s from "../css/HomeMovies.module.css";

export const HomeMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items) || [];
  console.log("todas la peliculas", movies);

  const [currentPages, setCurrentPages] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [moviesPerPage, setMoviesPage] = useState(21);

  const indexOfLastCountry = currentPages * moviesPerPage; //10

  const indexOfFirstCountry = indexOfLastCountry - moviesPerPage; //0

  const currentMovies = movies.slice(indexOfFirstCountry, indexOfLastCountry);

  //PAGINADO
  //const para mostrar los numeros de la pagina
  const paginado = (pagesNumber) => {
    setCurrentPages(pagesNumber);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Paged
        moviesPerPage={moviesPerPage}
        allMovies={movies.length}
        paginado={paginado}
      />
      <div className={s.card}>
        {currentMovies?.map((c, i) => {
          return (
            <Fragment key={c.id}>
              <CardImage image={c.image} id={c.id} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

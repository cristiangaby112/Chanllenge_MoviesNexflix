import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CardImage from "../components/CardImage";
import Paged from "../components/Paged";
import s from "../css/SearchMovies.module.css";

export const SearchMovies = () => {
  const searchMovies = useSelector((state) => state.searchMovies.results) || [];

  const [currentPages, setCurrentPages] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [moviesPerPage, setMoviesPage] = useState(14);

  const indexOfLastCountry = currentPages * moviesPerPage; //14

  const indexOfFirstCountry = indexOfLastCountry - moviesPerPage; //0

  const currentSearchMovies = searchMovies.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  //PAGINADO
  //const para mostrar los numeros de la pagina
  const paginado = (pagesNumber) => {
    setCurrentPages(pagesNumber);
  };

  return (
    <div className={s.container}>
      <Paged
        moviesPerPage={moviesPerPage}
        allMovies={searchMovies.length}
        paginado={paginado}
      />
      <div className={s.card}>
        {currentSearchMovies?.map((c) => {
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

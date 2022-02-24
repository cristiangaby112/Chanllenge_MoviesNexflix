import React, { Fragment } from "react";
import s from "../css/Paged.module.css";

export default function Paged({ moviesPerPage, allMovies, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  //renderizo los numeros
  return (
    <div className={s.paginado}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <Fragment key={number}>
            <button className={s.btn} onClick={() => paginado(number)}>
              {number}{" "}
            </button>
          </Fragment>
        ))}
    </div>
  );
}

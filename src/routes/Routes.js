import React from "react";
import { Switch, Route } from "react-router";
import { DetailsMovie } from "../pages/DetailsMovie";
import { HomeMovies } from "../pages/HomeMovies";
import { SearchMovies } from "../pages/SearchMovies";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeMovies} />
      <Route path="/search" component={SearchMovies} />
      <Route path="/details/:id" component={DetailsMovie} />
    </Switch>
  );
};

export default Routes;

import axios from "axios";

//CONSTANTES

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_NAME = "GET_MOVIES_NAME";
export const GET_DETAILS = "GET_DETAILS";

export function getMovies() {
  return async (dispatch) => {
    var json = await axios.get(
      "https://imdb-api.com/en/API/MostPopularMovies/k_brvuz12g"
    );
      // var json = await axios.get("../../movies.json")
    console.log("soy la data", json.data);
    return dispatch({
      type: "GET_MOVIES",
      payload: json.data,
    });
  };
}

export function getMoviesSearch(name) {
  return async (dispatch) => {
    try {
      var json = await axios.get(
        "https://imdb-api.com/en/API/Search/k_brvuz12g/" + name
      );
      return dispatch({
        type: "GET_MOVIES_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetails(id) {
  return async (dispatch) => {
    try {
      var json = await axios.get(
        "https://imdb-api.com/en/API/Title/k_brvuz12g/" + id
      );
      // console.log("soy el details", json.data);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

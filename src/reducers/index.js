import { GET_MOVIES, GET_MOVIES_NAME, GET_DETAILS } from '../actions/index';



const initialState = {
  movies: {},
  searchMovies: [],
  details: {},
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIES_NAME:
      return {
        ...state,
        searchMovies: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
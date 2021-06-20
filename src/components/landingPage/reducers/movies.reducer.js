import { moviesConstants } from "../constants/movies.constant";

export const latestMovies = (state = {}, action) => {
  switch (action.type) {
    case moviesConstants.GET_LATEST_MOVIES_REQ:
      return {
        loading: true,
      };
    case moviesConstants.GET_LATEST_MOVIES_SUCC:
      return {
        movies_list: action.movies_list,
        loading: false,
      };
    case moviesConstants.GET_LATEST_MOVIES_FAIL:
      return {
        error: action.movie_list_error,
        loading: false,
      };

    default:
      return state;
      break;
  }
};

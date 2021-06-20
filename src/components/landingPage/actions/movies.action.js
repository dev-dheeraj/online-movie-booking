import { moviesConstants } from "../constants/movies.constant";
import { moviesServices } from "../services/movies.service";

export const moviesActions = {
  getLatestMovie,
  getUpcommingMovie,
  getMovieDetails
};

function getLatestMovie() {
  return (dispatch) => {
    try {
      moviesServices
        .getLatestMovie()
        .then((response) => {
          if(response && response.data){
            dispatch(success(response.data));
          }else{
            dispatch(failure('Sometihng went wrong'));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    } catch (error) {}
  };

  function request() {
    return { type: moviesConstants.GET_LATEST_MOVIES_REQ };
  }
  function success(movies_list) {
    return { type: moviesConstants.GET_LATEST_MOVIES_SUCC, movies_list };
  }
  function failure(movie_list_error) {
    return { type: moviesConstants.GET_LATEST_MOVIES_FAIL, movie_list_error };
  }
}

function getUpcommingMovie() {
  return (dispatch) => {
    try {
      moviesServices
        .getUpcommingMovie()
        .then((response) => {
          if(response && response.data){
            dispatch(success(response.data));
          }else{
            dispatch(failure('Sometihng went wrong'));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    } catch (error) {}
  };

  function request() {
    return { type: moviesConstants.GET_LATEST_MOVIES_REQ };
  }
  function success(movies_list) {
    return { type: moviesConstants.GET_LATEST_MOVIES_SUCC, movies_list };
  }
  function failure(movie_list_error) {
    return { type: moviesConstants.GET_LATEST_MOVIES_FAIL, movie_list_error };
  }
}

function getMovieDetails(param) {
  return (dispatch) => {
    try {
      moviesServices
        .getMovieDetails(param)
        .then((response) => {
          if(response && response.data){
            dispatch(success(response.data));
          }else{
            dispatch(failure('Sometihng went wrong'));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    } catch (error) {}
  };

  function request() {
    return { type: moviesConstants.GET_LATEST_MOVIES_REQ };
  }
  function success(movies_list) {
    return { type: moviesConstants.GET_LATEST_MOVIES_SUCC, movies_list };
  }
  function failure(movie_list_error) {
    return { type: moviesConstants.GET_LATEST_MOVIES_FAIL, movie_list_error };
  }
}

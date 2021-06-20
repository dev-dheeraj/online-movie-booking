import { post, get } from "../../../api/api";

function getLatestMovie() {
  // try {
  return get("/latest", )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

}

function getUpcommingMovie() {
  // try {
  return get("/upcomingMovies", )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

}

function getMovieDetails(param) {
  // try {
    console.log('---param------', param)
    let id = param && param.movieId ? param.movieId : ''
  return get(`/latest/${id}`, )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

}

export const moviesServices = {
  getLatestMovie,
  getUpcommingMovie,
  getMovieDetails
};

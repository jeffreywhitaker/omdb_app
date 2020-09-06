import axios from "axios";

export default {
  getMovies(searchInput) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=951cc99b&s=${searchInput}&type=movie`
    );
  },

  getMovie(movieID) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=951cc99b&i=${movieID}&type=movie`
    );
  },
};

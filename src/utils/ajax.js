import axios from "axios";

export default {
  getMovies(searchInput, pageInput) {
    return axios.get(
      `https://www.omdbapi.com/?apikey=951cc99b&s=${searchInput}&page=${pageInput}&type=movie`
    );
  },

  getMovie(movieID) {
    return axios.get(
      `https://www.omdbapi.com/?apikey=951cc99b&i=${movieID}&type=movie`
    );
  },
};

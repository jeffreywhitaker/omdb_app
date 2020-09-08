export default {
  isNominated(nominated, imdbID) {
    if (nominated && nominated.length > 0) {
      return nominated.some((movie) => movie.imdbID === imdbID);
    } else return false;
  },
};

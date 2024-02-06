import axios from "axios";
export const fetchMovies = () => {
  return axios.get(`http://localhost:3000/movie`).then((res) => {
    return res.data;
  });
};

export const fetchMovie = (films_id) => {
  return axios.get(`http://localhost:3000/movie/${films_id}`).then((res) => {
    return res.data;
  });
};

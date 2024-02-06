import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/movie").then((res) => {
      setIsLoading(false);
      setMovieList(res.data);
    });
  }, [setMovieList]);
  return isLoading ? (
    <div>...loading</div>
  ) : (
    <div>
      {console.log("here")}
      <h1>View Current Films</h1>

      {movieList.map((movie) => {
        return (
          <Link to={`/films/${movie.id}`} key={movie.id}>
            <ul key={movie.id}>
              <li>{movie.title}</li>

              <li>
                <img
                  src={movie.image}
                  width="400vw"
                  height="600vh"
                  alt={`poster for movie ${movie.title}`}
                />
              </li>

              <li>{movie.description}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default Films;

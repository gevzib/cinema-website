import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "./api/api";
import { ThemeContext } from "./contexts/context";

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchMovies().then((res) => {
      setIsLoading(false);
      setMovieList(res);
    });
  }, [setIsLoading, setMovieList]);
  return isLoading ? (
    <div>...loading</div>
  ) : (
    <div>
      <h1>View Current Films</h1>

      {movieList.map((movie) => {
        return (
          <Link to={`/films/${movie.id}`} key={movie.id}>
            <ul key={movie.id}>
              <li>
                <img
                  src={movie.image}
                  width="400vw"
                  height="600vh"
                  alt={`poster for movie ${movie.title}`}
                />
              </li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default Films;

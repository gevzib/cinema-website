import { useDebugValue, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
function FilmCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  let { films_id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/movie/${films_id}`).then((res) => {
      setIsLoading(false);
      setMovie(res.data);
    });
  }, [setIsLoading, setMovie]);
  return isLoading ? (
    <div>...is loading</div>
  ) : (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={movie.image}
        width="400vw"
        height="600vh"
        alt={`poster for movie ${movie.title}`}
      />
      <p>{movie.description}</p>
    </div>
  );
}

export default FilmCard;

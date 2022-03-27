import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";
function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(fetchURL);
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={base_url + (isLargeRow?movie.poster_path:movie.backdrop_path)}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;

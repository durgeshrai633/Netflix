import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css"
function Row({ title, fetchURL }) {
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
  console.table(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <img
              className='row__poster'
              src={base_url + movie.poster_path}
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

import React, { useEffect, useState } from "react";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import "./row.css";
import YouTube from "react-youtube";
function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(fetchURL);
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);
  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err.message));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleMovie(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={
                base_url +
                (isLargeRow ? movie.poster_path : movie.backdrop_path)
              }
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Row;

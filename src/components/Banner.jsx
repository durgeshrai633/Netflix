import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_discription'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner--fadebutton'></div>
    </header>
  );
}

export default Banner;

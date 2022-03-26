import React, { useEffect, useState } from "react";
import axios from "../axios";
function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(fetchURL);
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;

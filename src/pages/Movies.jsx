import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import BackToTop from "../components/BackToTop";

const API_KEY = "71a73b4c1194c61093da0533d7ea563c";
const HORROR_ID = 27;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${HORROR_ID}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className=" bg-black">
      <h1 className="flex justify-center items-center text-3xl md:text-6xl font-bold p-4 md:mb-8 font-body text-white">
        Our Collection
      </h1>
      <MovieList movies={movies} />
      <BackToTop />
    </div>
  );
};

export default Movies;

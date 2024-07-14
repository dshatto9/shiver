import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const API_KEY = "71a73b4c1194c61093da0533d7ea563c";

const Trailer = () => {
  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieTitle(movieResponse.data.title);

        // Fetch trailer data
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        const trailers = trailerResponse.data.results;
        const trailer = trailers.find((vid) => vid.type === "Trailer");
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        } else {
          setError("Trailer not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="bg-black flex justify-center items-center h-[600px] md:h-screen"
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="flex absolute top-20 md:top-34 2xl:top-24 text-2xl md:text-3xl font-bold text-white"
      >
        {movieTitle || "Movie Trailer"}
      </motion.h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : trailerUrl ? (
        <motion.iframe
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          width="80%"
          height="80%"
          src={trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="mt-24"
        ></motion.iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </motion.div>
  );
};

export default Trailer;

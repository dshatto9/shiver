import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const MovieList = ({ movies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="md:container mx-auto p-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </motion.div>
  );
};

export default MovieList;

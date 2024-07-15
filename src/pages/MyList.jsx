import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { motion } from "framer-motion";

const MyList = () => {
  const { favorites } = useFavorites();
  console.log(favorites);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="bg-black"
    >
      <h1 className="flex justify-center items-center text-3xl md:text-6xl font-bold p-4 md:mb-8 font-body text-white">
        Favorites
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto p-2 mt-12">
        {favorites.map((item) =>
          item.media_type === "movie" ? (
            <MovieCard key={item.id} movie={item} />
          ) : (
            <SeriesCard key={item.id} series={item} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default MyList;

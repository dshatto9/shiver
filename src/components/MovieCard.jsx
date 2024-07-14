import { useFavorites } from "../context/FavoritesContext";
import favorite from "../assets/favorite.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === movie.id);
  const [notification, setNotification] = useState("");

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
      setNotification("Removed from Favorites");
    } else {
      addFavorite({ ...movie, media_type: "movie" });
      setNotification("Added to Favorites");
    }

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500";

  return (
    <div className="md:relative  md:max-w-sm rounded overflow-hidden hover:scale-105">
      <Link to={`/trailer/${movie.id}`}>
        <img className="w-full" src={imageUrl} alt={movie.title} />
      </Link>
      <div className="md:absolute md:bottom-0 md:left-0 md:right-0 bg-black md:bg-opacity-75 p-4 md:opacity-0 md:hover:opacity-100 duration-300">
        <button>
          <img
            src={favorite}
            onClick={handleFavorite}
            width={32}
            className="md:absolute right-2 top-2 cursor-pointer"
          />
        </button>
        <div className="font-bold text-white text-2xl mb-2">{movie.title}</div>
        <p className="text-white text-base">{movie.overview}</p>
        <div className="flex items-center justify-center gap-4"></div>
        {notification && (
          <div className="md:absolute top-0 right-0 mt-2 mr-2 p-2 bg-green-500 text-white rounded shadow-lg">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieCard;

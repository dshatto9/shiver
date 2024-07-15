import { useFavorites } from "../context/FavoritesContext";
import favorite from "../assets/favorite.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SeriesCard = ({ series }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === series.id);
  const [notification, setNotification] = useState("");

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(series.id);
      setNotification("Removed from Favorites");
    } else {
      addFavorite({ ...series, media_type: "tv" });
      setNotification("Added to Favorites");
    }

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const imageUrl = series.poster_path
    ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
    : "https://via.placeholder.com/300";

  return (
    <div className="md:relative md:max-w-sm rounded overflow-hidden md:hover:scale-105">
      <Link to={`/trailer/${series.id}`}>
        <img className="w-full" src={imageUrl} alt={series.title} />
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
        <div className="text-white font-bold text-xl mb-2">{series.title}</div>
        <p className="text-white text-base">{series.overview}</p>
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

export default SeriesCard;

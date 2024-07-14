import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import MyList from "../pages/MyList";
import { FavoritesProvider } from "../context/FavoritesContext";
import Trailer from "../pages/Trailer";
import Trial from "../pages/Trial";
import Settings from "../pages/Settings";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <FavoritesProvider>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trailer/:movieId" element={<Trailer />} />
          <Route path="/series" element={<Series />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
    </FavoritesProvider>
  );
};

export default AnimRoutes;

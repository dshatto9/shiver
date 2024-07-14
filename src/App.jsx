import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <AnimRoutes />
        <Footer />
      </Router>
    </FavoritesProvider>
  );
};

export default App;

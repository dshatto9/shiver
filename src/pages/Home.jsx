import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackToTop from "../components/BackToTop";

const API_KEY = "71a73b4c1194c61093da0533d7ea563c";
const HORROR_ID = 27;

const Home = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${HORROR_ID}`
        );
        setNewReleases(response.data.results.slice(0, 4));
      } catch (error) {
        console.error("Error fetching new releases:", error);
      }
    };
    fetchNewReleases();
  }, []);

  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="bg-black md:h-[500px]"
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="md:container mx-auto p-2 md:mt-64"
      >
        <h1 className="text-white text-3xl md:text-6xl font-body flex items-center justify-center md:mb-6">
          New Releases
        </h1>
        <MovieList movies={newReleases} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="flex flex-col justify-center items-center gap-6 mt-16 md:mt-24"
      >
        <h1 className="text-white md:text-3xl font-body font-semibold">
          Enjoy a Free Trial for 30 Days
        </h1>
        <button className="bg-[#FF4343] w-[150px] p-2.5 rounded-lg mb-48">
          <Link to={`/trial`} className="text-white text-lg font-body">
            Sign Up
          </Link>
        </button>
      </motion.div>
      <BackToTop />
    </div>
  );
};

export default Home;

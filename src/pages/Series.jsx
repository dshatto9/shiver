import axios from "axios";
import SeriesList from "../components/SeriesList";
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";

const API_KEY = "71a73b4c1194c61093da0533d7ea563c";
const HORROR_ID = 27;

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${HORROR_ID}`
        );
        setSeries(response.data.results.slice(4, 80));
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    fetchSeries();
  }, []);

  return (
    <div className="bg-black">
      <h1 className="flex justify-center items-center text-3xl md:text-6xl font-bold p-4 mb-6 md:mb-8 font-body text-white">
        Only on Shiver
      </h1>
      <SeriesList series={series} />
      <BackToTop />
    </div>
  );
};

export default Series;

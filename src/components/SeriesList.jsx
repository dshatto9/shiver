import SeriesCard from "./SeriesCard";
import { motion } from "framer-motion";

const SeriesList = ({ series }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="md:container mx-auto p-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {series.map((item) => (
          <SeriesCard key={item.id} series={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default SeriesList;

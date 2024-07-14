import { motion } from "framer-motion";

const Trial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="bg-[url('./assets/collage.jpg')]"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(0,0,0,0.5)]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="mt-32 lg:mt-32 2xl:mt-52 ml-[56px] md:ml-0 md:mt-56 flex flex-col md:items-center md:justify-center"
        >
          <h1 className="text-3xl md:text-6xl font-bold font-body text-white">
            Activate Your Free Trial
          </h1>
          <p className="text-xl md:text-2xl font-bold font-body text-white p-2">
            Enter your information below
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center container mx-auto h-screen">
        <form action="" className="flex flex-col gap-8 md:w-[25%] z-[1]">
          <input
            type="text"
            placeholder="Email"
            className="p-2.5 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2.5 rounded-lg"
            required
          />
          <input
            type="submit"
            value="Activate Trial"
            className="bg-[#FF4343] rounded-lg p-2.5 text-white font-body cursor-pointer"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Trial;

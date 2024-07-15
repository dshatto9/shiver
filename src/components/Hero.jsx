// import nature from "../assets/nature.jpg";
import legs from "../assets/longlegs.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center bg-black">
        <img
          src={legs}
          alt=""
          className="bg-black mt-3 h-[200px] md:w-[85%] md:h-[700px] lg:h-[600px] 2xl:h-[700px] object-cover md:mt-8 outline outline-1 outline-white"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;

import nature from "../assets/nature.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center bg-black">
        <img
          src={nature}
          alt=""
          className="bg-black mt-6 h-[250px] md:w-[85%] md:h-[700px] object-cover md:mt-8 outline outline-1 outline-white"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;

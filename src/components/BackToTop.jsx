import { useState, useEffect } from "react";
import upload from "../assets/upload.png";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-[6px] 2xl:right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#FF4343] hover:bg-[#ff6d6d] text-white font-bold p-2.5 rounded-full"
        >
          <img src={upload} width={24} alt="" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;

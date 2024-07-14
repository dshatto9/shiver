import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import email from "../assets/email.png";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="mr-[150px] ml-[150px] mt-[30px] mb-[30px]"
    >
      <div className="hidden md:flex gap-[50px]">
        <div className="flex-1 flex ml-4 flex-col gap-2 text-justify text-sm">
          <h1 className="font-bold text-[16px] text-gray-600">Categories</h1>
          <span className="text-nowrap text-gray-500 cursor-pointer">
            New Arrivals
          </span>
          <span className="text-gray-500 cursor-pointer">Trending</span>
          <span className="text-gray-500 cursor-pointer">Movies</span>
          <span className="text-gray-500 cursor-pointer">Series</span>
          <span className="text-gray-500 cursor-pointer">My Account</span>
        </div>
        <div className="flex flex-col text-justify text-sm gap-2">
          <h1 className="font-bold text-[16px] text-gray-600">Links</h1>
          <a href="/contact">
            <span className="text-gray-500 cursor-pointer">FAQ</span>
          </a>
          <span className="text-gray-500 cursor-pointer">Socials</span>
          <span className="text-gray-500 cursor-pointer">Contact Us</span>
          <span className="text-gray-500 text-nowrap cursor-pointer">
            About Us
          </span>
          <span className="text-gray-500 cursor-pointer text-nowrap">
            Privacy Policy
          </span>
        </div>
        <div className="">
          <h1 className="font-bold text-[16px] text-gray-600">
            Stay Connected
          </h1>
          <span className="md:flex justify-center items-center">
            Join the mailing list to keep up to date on latest releases and
            updates!
          </span>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Email"
              className="outline outline-1 h-[36px] w-1/2 p-2"
            />
            <button
              type="submit"
              className="flex justify-center items-center outline outline-1 bg-[#FF4343] h-[36px] p-2"
            >
              <img
                src={arrow}
                alt=""
                width={24}
                className="flex items-center justify-center"
              />
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-[16px] text-gray-600">Contact Us</h1>
          <span className="flex items-center justify-center">
            Feel free to contact us with any questions or concerns you may have.
            You can reach us at any of these links.{" "}
          </span>
          <div className="md:flex mt-4 gap-2">
            <a href="https://www.facebook.com">
              <img src={fb} alt="" width={24} />
            </a>
            <a href="https://www.instagram.com">
              <img src={insta} alt="" width={24} />
            </a>

            <a href="/contact">
              <img src={email} alt="" width={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-between mt-[30px]">
        <div className="flex items-center justify-center">
          <span className="hidden md:flex justify-center items-center absolute md:left-[165px] font-bold">
            SHIVER
          </span>
          <span className="flex items-center justify-center absolute left-24 md:left-[180px] w-58 md:ml-[50px] text-xs">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

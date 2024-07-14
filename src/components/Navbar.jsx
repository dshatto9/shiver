import shiver2 from "../assets/shiver2.webp";
import profile from "../assets/profile.png";
import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { favorites } = useFavorites();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="md:flex md:h-[90px] w-full fixed z-10 bg-black">
      <nav className="md:flex w-full justify-between">
        <div className="md:flex items-center">
          <a href="/">
            <img
              src={shiver2}
              alt=""
              width={300}
              className="md:flex items-center h-16 -ml-10 md:h-50 md:ml-4 object-cover"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center mr-[60px]">
          <button className="">
            <Link
              to={`/trial`}
              className="md:flex items-center md:mr-10 font-body bg-[#FF4343] p-2.5 rounded-2xl text-white font-semibold cursor-pointer"
            >
              Try Free for 30 Days
            </Link>
          </button>
          <ul className="flex gap-[50px] font-body">
            <a href="/">
              <li className="text-white hover:scale-110">Home</li>
            </a>
            <a href="/movies">
              <li className="text-white hover:scale-110">Movies</li>
            </a>
            <a href="/series">
              <li className="text-white hover:scale-110">Exclusives</li>
            </a>
          </ul>
          <div className="md:relative">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none flex items-center justify-center"
            >
              <img src={profile} alt="User" width={24} className="ml-10" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10">
                <Link
                  to="/mylist"
                  className="block px-4 py-2 text-white hover:bg-[#FF4343]"
                  onClick={() => setDropdownOpen(false)}
                >
                  Favorites
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-white hover:bg-[#FF4343]"
                  onClick={() => setDropdownOpen(false)}
                >
                  {" "}
                  Settings
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <HamburgerMenu toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className=""></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

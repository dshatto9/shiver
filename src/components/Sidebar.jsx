import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-52 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button onClick={toggleSidebar} className="p-4">
        X
      </button>
      <nav className="mt-10 flex flex-col gap-8">
        <Link
          to="/"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#FF4343] hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#FF4343] hover:text-white"
        >
          Movies
        </Link>
        <Link
          to="/series"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#FF4343] hover:text-white"
        >
          Exclusives
        </Link>
        <Link
          to="/mylist"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#FF4343] hover:text-white"
        >
          Favorites
        </Link>
        <Link
          to="/settings"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#FF4343] hover:text-white"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

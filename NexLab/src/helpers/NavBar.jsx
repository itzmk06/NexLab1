import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#282828] text-[#E0E0E0] w-full md:h-16 h-14 px-4 py-2 flex items-center shadow-lg border-b border-[#333]">
      <div className="flex justify-between items-center w-full">
        <h1 className="main-font1 cursor-pointer text-white text-2xl md:text-3xl font-extrabold tracking-tight transition-transform transform hover:scale-105">
          NexLab
        </h1>
        <div className="hidden md:flex md:items-center md:gap-x-8 text-lg font-medium">
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors duration-300">
              <span>Features</span>
              <i className="fi fi-br-angle-small-down mt-1 text-md"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-[#1F1F1F] text-[#E0E0E0] rounded-lg shadow-lg w-48">
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors duration-300">
              <span>Support</span>
              <i className="fi fi-br-angle-small-down mt-1 text-md"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-[#1F1F1F] text-[#E0E0E0] rounded-lg shadow-lg w-48">
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors duration-300">
              <span>Updates</span>
              <i className="fi fi-br-angle-small-down mt-1 text-md"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-[#1F1F1F] text-[#E0E0E0] rounded-lg shadow-lg w-48">
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors duration-300">
              <span>Community</span>
              <i className="fi fi-br-angle-small-down mt-1 text-md"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-[#1F1F1F] text-[#E0E0E0] rounded-lg shadow-lg w-48">
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 cursor-pointer z-[9999]">
          <Link
            to={"/login"}
            className="bg-[#333] text-[#E0E0E0] px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-[#444] flex items-center justify-center"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="bg-[#00BFFF] text-[#0D0D0D] px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-[#009ACD] flex items-center justify-center"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

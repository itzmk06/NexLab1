import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="mt-1  w-full md:h-14 h-12 px-1 py-2    md:px-3 md:py-2 z-[999] relative">
      <div className="flex justify-between items-center text-base font-medium">
        <h1 className="main-font1 text-3xl md:text-3xl font-extrabold">
          NexLab
        </h1>
        <div className="md:flex hidden md:flex-row md:text-lg md:gap-x-5 cursor-pointer">
          <div className="flex items-center px-2  gap-1">
            <h1 className="font-semibold">Features</h1>
            <i className="fi fi-br-angle-small-down mt-2 text-md "></i>
          </div>
          <div className="flex items-center gap-1 px-2">
            <h1 className="font-semibold">Support</h1>
            <i className="fi fi-br-angle-small-down mt-2 text-md"></i>
          </div>
          <div className="flex items-center gap-1 px-2">
            <h1 className="font-semibold">Updates</h1>
            <i className="fi fi-br-angle-small-down mt-2 text-md"></i>
          </div>
          <div className="flex items-center gap-1 px-2">
            <h1 className="font-semibold">Community</h1>
            <i className="fi fi-br-angle-small-down mt-2 text-md"></i>
          </div>
        </div>
        <div className="flex md:gap-x-3 gap-x-3">
          <Link
            to={"/login"}
            className="cursor-pointer bg-[#cecccca2] px-3 py-1 text-black rounded-md font-semibold"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="bg-black bg-opacity-90 px-3 py-1 text-zinc-200 rounded-md font-semibold"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

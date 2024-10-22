import SideBar from "./SideBar";

const NavBarApp = () => {
  return (
    <div className="w-full flex justify-end md:h-12 h-14 fixed top-0 z-[1000] rounded-xl">
      <div className="w-full flex justify-between h-full mx-auto relative">
        <div className="transition-transform duration-300 ease-in-out relative z-[1000]">
          <SideBar />
        </div>
        <div className="hidden w-4/12 py-5 gap-5 ml-14 md:flex justify-center items-center relative md:left-[5%] md:translate-[50%,50%]">
          <input
            type="text"
            placeholder="Search for projects, developers, topics, and more..."
            className="text-white font-medium shadow-lg w-full outline-none outline-xl outline-gray-500 focus:outline-[#00BFFF] bg-[#282828] bg-opacity-80 py-1 px-2 rounded-md text-base md:text-base transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex items-center px-2 space-x-4 mr-5">
          <button className="px-3 py-1 md:font-semibold bg-[#00BFFF] rounded-md text-zinc-700 shadow-lg transition-transform duration-300 ease-in-out hover:bg-[#1b98c2a8] transform hover:scale-105">
            New Project
          </button>
          <div className="relative">
            <img
              className="w-9 h-9 rounded-full object-cover border-2 border-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.unsplash.com/photo-1603005901058-02e1cfc65270?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarApp;

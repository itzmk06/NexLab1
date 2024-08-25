import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen w-full">
      <i
        className={`${
          open ? "fi fi-sr-cross text-1xl font-extrabold text-[#00BFFF] hover:text-red-600 hover:scale-110" : "fi fi-ss-apps text-2xl text-[#00BFFF] hover:text-[#20c7ff] hover:shadow-2xl hover:scale-110 ease-in-out"
        } text-white cursor-pointer m-2 absolute md:top-1  top-3  transition-transform duration-1000 ease-in-out ${
          open ? "left-[35%] md:left-[12.5%]" : "left-2"
        } z-50`}
        onClick={() => setOpen(!open)}
      ></i>

      <div
        className={`fixed top-0 left-0 h-full bg-[#121212] text-[#F4F4F4] transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:w-[15%] w-[45%] flex flex-col gap-5 px-5 py-4 cursor-pointer md:pt-[0.5%] sm:pt-[5%] justify-start rounded-tr-xl rounded-br-xl`}
      >
        <div className="flex gap-2 mt-5" onClick={() => setOpen(!open)}>
          <i className="fi fi-sr-square-n text-3xl ml-[-0.3rem]"></i>
          <h1 className="text-2xl font-extrabold">NexLab</h1>
        </div>
        <div className="flex gap-3 items-center ">
          <i className="fi fi-ss-home text-xl text-[#00A8E1]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Home</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-sr-briefcase text-xl text-[#1EBC9C]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Projects</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-sr-folder text-xl text-[#3DFF6F]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Repositories</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-ss-users-alt text-xl text-[#6C5B7B]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Teams</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-ss-heart text-xl text-[#F76C6C]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Favorites</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-sr-paper-plane text-xl text-[#E84A5F]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Messages</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-ss-bell-notification-social-media text-xl text-[#F7E04A]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Notifications</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-br-list-check text-xl text-[#9E9E9E]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Todo</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-br-search text-xl text-[#00CFC1]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Search</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-sr-settings-sliders text-xl text-[#34495E]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Settings</h1>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fi fi-sr-info text-xl text-[#4CAF50]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Help</h1>
        </div>

        <div className="flex gap-3 items-center">
          <i className="fi fi-br-sign-out-alt text-xl text-[#D32F2F]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem]">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

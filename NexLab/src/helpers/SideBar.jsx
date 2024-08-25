const SideBar = () => {
  return (
    <div className="w-[15%]   h-screen bg-[#F4F4F4] flex items-center justify-start rounded-tr-xl rounded-br-xl">
      <div className="flex flex-col gap-5 px-5 py-4">
        <div className="flex gap-2 ">
          <i className="fi fi-sr-square-n text-3xl ml-[-0.3rem]"></i>
          <h1 className="text-2xl font-extrabold">NexLab</h1>
        </div>
        <div className="flex gap-3 items-center ">
          <i className="fi fi-ss-home text-xl text-[#00A8E1]"></i>
          <h1 className="text-xl font-bold mt-[-0.5rem] ">Home</h1>
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
          <i className="fi fi-ss-users-alt text-xl  text-[#6C5B7B]"></i>
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

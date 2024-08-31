const PostUserCard = () => {
  return (
    <div className="w-full h-20 bg-[#202020] rounded-lg p-4 transition-transform duration-300 ease-out  cursor-pointer relative group overflow-hidden">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-5">
          <div className="relative group/avatar">
            <img
              className="w-16 h-16 rounded-full object-cover object-center border-2 border-[#2D2D2D] transition-all duration-300 ease-in-out group-hover/avatar:scale-110 "
              src="https://images.unsplash.com/photo-1603005901058-02e1cfc65270?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt="User Profile"
            />
            <div className="absolute -bottom-0 -right-[-0.15rem] w-4 h-4 rounded-full border-2 border-[#1B1B1B] bg-green-500 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 flex-col">
            <h1 className="text-white font-semibold text-lg leading-none   duration-200 tracking-wide">
              Manoj Kumar M
            </h1>
            <div className="flex justify-center items-center gap-2">
            <h2 className="text-[#b9c1cf] text-base font-semibold tracking-wider">@jetfuze</h2>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <h3 className="text-[#9CA3AF] text-sm font-semibold tracking-wider">10 hours ago</h3>
            </div>
            </div>
          </div>
        </div>
        <button className="relative group/button px-2 py-1 text-sm md:font-semibold bg-[#00BFFF] rounded-md text-zinc-700 shadow-lg transition-transform duration-300 ease-in-out hover:bg-[#1b98c2a8] transform hover:scale-105">
          Follow
        </button>
      </div>
        {/* <div className="w-11/12 h-[0.1rem] flex justify-center mx-auto mt-3 bg-[#00BFFF] bg-opacity-80"></div> */}
    </div>
  );
};

export default PostUserCard;

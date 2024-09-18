const MessageSender = () => {
  return (
    <div className="fixed bottom-4 w-8/12 rounded-3xl mx-10 h-[4.2vw] bg-[#1a1a1a] text-zinc-200 shadow-lg  bg-opacity-70 border border-[#2a2a2a]  transition-all duration-300">
      <div className="flex items-center justify-between px-5 py-3 gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/742/742751.png"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
            alt="Emoji"
            title="Emojis"
          />
          <i className="fi fi-rr-square-plus text-2xl cursor-pointer transform hover:scale-110 text-[#cfcfcf] hover:text-[#00BFFF] transition duration-300 ease-in-out" title="Attach Files"></i>
        </div>
        <div className="flex-1 ">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full h-10 mt-[-0.2rem]  px-4 py-2  text-sm text-[#E0E0E0] bg-[#2a2a2a] rounded-2xl border border-[#3d3d3d] focus:border-[#00BFFF] focus:outline-none focus:ring-1 focus:ring-[#11B2AD] placeholder-gray-400 transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center gap-4">
          <i className="fi fi-rr-paper-plane text-lg cursor-pointer transform hover:scale-110 text-[#cfcfcf] hover:text-[#00BFFF] transition duration-300 ease-in-out" title="Send Message"></i>
          <i className="fi fi-rr-microphone text-xl cursor-pointer transform hover:scale-110 text-[#cfcfcf] hover:text-[#00BFFF] transition duration-300 ease-in-out" title="Voice Message"></i>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;

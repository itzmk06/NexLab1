import PropTypes from 'prop-types';

const MessageSectionTopNav = ({ data }) => {
  return (
    <div className="w-full h-20 rounded-lg bg-[#121212] px-4 pt-2 text-zinc-200 shadow-lg backdrop-blur-lg bg-opacity-70 transition-all duration-300 border border-[#2a2a2a]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer -mb-1 transform hover:scale-105 transition duration-300 ease-in-out relative">
            <img
              src={data?.avatar}
              className="w-16 h-16 object-cover object-top rounded-full border-2 border-[#2e2e2e] p-1  transition duration-300"
              alt="User Avatar"
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-[#1c1c1c] rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-wide text-[#E0E0E0] group-hover:text-[#00BFFF] transition duration-300">{data?.name}</h1>
            <h2 className="text-sm text-[#b0b0b0] cursor-pointer  transition duration-300 ease-in-out">
              Click here to view contact info
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5 pr-4">
          <div className="cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out group">
            <i className="fi fi-rr-video-camera-alt text-2xl text-[#cfcfcf] group-hover:text-[#00BFFF] transition duration-300 ease-in-out"></i>
          </div>
          <div className="cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out group">
            <i className="fi fi-rs-circle-phone text-xl text-[#cfcfcf] group-hover:text-[#00BFFF] transition duration-300 ease-in-out"></i>
          </div>
          <div className="cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out group">
            <i className="fi fi-bs-menu-dots text-xl text-[#cfcfcf] group-hover:text-[#00BFFF] transition duration-300 ease-in-out"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

MessageSectionTopNav.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageSectionTopNav;

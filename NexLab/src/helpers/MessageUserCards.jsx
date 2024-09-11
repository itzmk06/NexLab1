import PropTypes from 'prop-types';

const MessageUserCards = ({ data }) => {
  return (
    <div className="w-full h-18 bg-[#202020] rounded-lg text-base shadow-lg hover:bg-[#292929] transition-all ease-in-out cursor-pointer transform hover:scale-105 duration-300">
      <div className="flex items-center p-3">
        <div className="relative mr-2 h-12">
          <img
            className="object-cover w-12 h-12 rounded-full object-top transition duration-300"
            src={data?.avatar}
            alt="User Avatar"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#202020] rounded-full"></span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-semibold text-[#E0E0E0]">{data?.name}</h1>
          <p className="text-sm text-gray-400 truncate">{data?.message}</p>
        </div>
        <div className="flex flex-col items-center justify-center ml-2 text-xs text-gray-400">
          <span>{data?.time}</span>
          <div className="flex items-center justify-center w-4 h-4 mt-1 ml-1 text-sm font-semibold text-black bg-[#00BFFF] rounded-full">
            {data?.unread}
          </div>
        </div>
      </div>
    </div>
  );
};

MessageUserCards.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    unread: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageUserCards;

import { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns"; 

const MessageChatCard = ({ message }) => {
  const [expanded, setExpanded] = useState(true);
  const formattedTime = format(new Date(message?.time), "p"); 

  return (
    <div
      className={`w-full h-auto text-zinc-200 text-sm mt-4 transition-all duration-300 relative 
      ${message?.type === "sender" ? "items-end" : "items-start"}`}
      role="region" 
      aria-live="polite"
    >
      <div
        className={`flex gap-2 items-start ${
          message?.type === "sender" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-10 h-10 shrink-0 relative group">
          <img
            className="w-10 h-10 rounded-full object-cover object-top transition-transform duration-300 transform group-hover:scale-110"
            src={message?.senderImage}
            alt={`${message?.senderName}'s profile picture`}
          />
          <div className="absolute -left-2 top-14 bg-[#1f1f1f] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-zinc-300">
            {message?.senderName}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-12/12 md:w-9/12 lg:w-6/12">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-md">{message?.senderName}</h1>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">{formattedTime}</span>
            </div>
          </div>

          <div
            className={`relative ${
              message?.type === "sender"
                ? "bg-gradient-to-r from-green-700 to-green-600"
                : "bg-gradient-to-r from-zinc-900 to-zinc-800"
            } px-4 py-4 rounded-xl transition-all duration-300 ease-in-out shadow-lg ${
              expanded ? "max-h-full" : "max-h-20 overflow-hidden"
            }`}
          >
            <p className={`${expanded ? "" : "truncate"} transition-all duration-300`}>
              {message?.message}
            </p>

            {message?.message?.length > 20 && (
              <button
                className="absolute bottom-1 right-2 text-xs text-blue-400 hover:text-blue-500 font-medium focus:outline-none"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label={expanded ? "Show less" : "Read more"}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageChatCard;

MessageChatCard.propTypes = {
  message: PropTypes.shape({
    senderImage: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired, 
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["sender", "receiver"]).isRequired,
  }).isRequired,
};

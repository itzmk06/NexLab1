import { useState } from "react";

const PostReaction = () => {
  const [reactions, setReactions] = useState({
    liked: false,
    bookmarked: false,
  });

  const toggleLike = () => {
    setReactions((prev) => ({ ...prev, liked: !prev.liked }));
  };

  const toggleBookmark = () => {
    setReactions((prev) => ({ ...prev, bookmarked: !prev.bookmarked }));
  };

  return (
    <div className="w-[98%] rounded-lg mt-[0.1rem] h-12 bg-[#202020] mx-auto">
      <div className="flex justify-around items-center text-zinc-200 h-full">
        <button
          onClick={toggleLike}
          className={`flex gap-2 items-center justify-center px-3 py-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105 focus:outline-none ${
            reactions.liked ? "text-red-500" : ""
          }`}
          aria-label="Like"
        >
          <span className="text-sm font-medium">Like</span>
          <i className={`fi ${reactions.liked ? "fi-sr-heart" : "fi-ss-heart"} mt-1 text-lg`}></i>
        </button>
        <button
          className="flex gap-2 items-center justify-center px-3 py-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105 focus:outline-none"
          aria-label="Comment"
        >
          <span className="text-sm font-medium">Comment</span>
          <i className="fi fi-sr-comment-alt text-lg mt-1"></i>
        </button>
        <button
          onClick={toggleBookmark}
          className={`flex gap-2 items-center justify-center  px-3 py-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105 focus:outline-none ${
            reactions.bookmarked ? "text-yellow-400" : ""
          }`}
          aria-label="Bookmark"
        >
          <span className="text-sm font-medium">Bookmark</span>
          <i className={`fi ${reactions.bookmarked ? "fi-sr-bookmark" : "fi-rr-bookmark"} mt-1 text-lg`}></i>
        </button>
        <button
          className="flex gap-2 items-center justify-center px-3 py-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105 focus:outline-none"
          aria-label="Share"
        >
          <span className="text-sm font-medium">Share</span>
          <i className="fi fi-br-share-square text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default PostReaction;

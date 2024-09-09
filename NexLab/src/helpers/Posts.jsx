import PostCards from "./PostCards";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";

const Posts = () => {
  return (
    <div className="md:w-[47%] mr-2 max-h-[calc(100vh-4rem)]   mx-auto md:mt-14 md:pt-0  md:pb-2  overflow-y-auto rounded-xl bg-[#3D3D3D] w-full  shrink-0">
      <PostCards /> 
      <PostContent />
      <PostReaction />
    </div>
  );
};

export default Posts;

import { userData } from "../Constants/constant";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import StatsSection from "./StatSection";

const UserCardMed = () => {
    return (
      <div className="w-[94%] max-h-[calc(100vh-4rem)]   mx-auto bg-[#3D3D3D] rounded-xl py-2 px-[-0.5rem] shadow-2xl md:my-1 my-3 group relative ">
        <div className="flex flex-col  transform transition-all duration-300  items-center bg-[#202020] w-[95%] rounded-t-xl mx-auto py-1 gap-4">
          <Profile
            profilePic={userData.profilePic}
            name={userData.name}
            username={userData.username}
            skills={userData.skills}
          />
          <StatsSection stats={userData.stats} />
          <div className="px-5 text-center">
            <p className="text-sm text-[#B0B0B0] leading-relaxed  ">
              {userData.bio}
            </p>
          </div>
          <SocialLinks links={userData.socialLinks} />
        </div>
      </div>
    );
  };
  
  export default UserCardMed;
  
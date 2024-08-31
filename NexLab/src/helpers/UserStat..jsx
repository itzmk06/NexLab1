import Trending from "./Trending";
import UserCardMed from "./UserCardMed";

const UserStat = () => {
  return (
    <div className="md:w-3/12 md:mt-14 py-5 md:py-0 w-screen overflow-y-auto  max-h-[calc(100vh-3.5rem)] bg-[#282828] shrink-0 sticky ">
      <div>
        <Trending />
      </div>
      <div>
        <UserCardMed />
      </div>
    </div>
  );
};

export default UserStat;

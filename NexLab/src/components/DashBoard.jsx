import NavbarApp from "../helpers/NavBarApp";
import NexHire from "../helpers/NexHire";
import Posts from "../helpers/Posts";
import UserStat from "../helpers/UserStat.";

const DashBoard = () => {
  return (
    <div className="bg-[#282828] w-full h-screen relative flex-nowrap  ">
      <NavbarApp />
      <div className="flex flex-col md:flex-row">
        <NexHire />
        <Posts />
        <UserStat />

      </div>
    </div>
  );
};

export default DashBoard;

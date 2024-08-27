import LiveChat from "../helpers/LiveChat";
import NavbarApp from "../helpers/NavBarApp";
import Posts from "../helpers/Posts";
import UserStat from "../helpers/UserStat.";

const DashBoard = () => {
  return (
    <div className="bg-[#282828] w-full h-screen relative flex-nowrap  ">
      <NavbarApp />
      <div className="flex flex-col md:flex-row">
        <LiveChat />
        <Posts />
        <UserStat />

      </div>
    </div>
  );
};

export default DashBoard;

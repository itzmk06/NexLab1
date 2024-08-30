import Trending from "./Trending";
import UserCardMed from "./UserCardMed";
const UserStat=()=>{
    return(
        <div className="md:w-3/12 w-screen h-screen    bg-[#282828] shrink-0 overflow-auto">
            <div>
                <Trending/>
            </div>
            <div>
                <UserCardMed/>
            </div>
        </div>
    )
};

export default UserStat;
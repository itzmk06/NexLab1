import MessageContactSection from "../helpers/MessageContact";
import MessageSection from "../helpers/MessageSection";
import NavBarApp from "../helpers/NavBarApp";
import SideBar from "../helpers/SideBar";

const Messages=()=>{
    return(
        <div className="w-full  h-screen py-1 overflow-hidden bg-[#282828] ">
            <NavBarApp/>
            <SideBar/>
            <div className="flex ">
            <MessageContactSection/>
                <MessageSection/>

            </div>
        </div>
    )
};

export default Messages;
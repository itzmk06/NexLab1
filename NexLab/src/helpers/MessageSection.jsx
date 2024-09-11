import MessageSectionTopNav from "./MessageSectionTopNav";
import { dummyMessages } from "../Constants/constant";
import MessageChats from "./MessageChats";
import MessageSender from "./MessageSender";

const MessageSection=()=>{
    return(
        <div className="w-full mr-2 overflow-y-auto   h-screen bg-[#3D3D3D] max-h-[calc(100vh-3rem)] mt-12 rounded-lg">

 
                    <MessageSectionTopNav data={dummyMessages[0]}/>

                    <MessageChats/>


                    <MessageSender/>


        </div>
    )

}

export default MessageSection;
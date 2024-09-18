import MessageChatSender from "./MessageChatSender";

const MessageChats=()=>{
    return(
        <div className="w-full h-[72vh] overflow-y-auto  px-8 py-2 bg-[#3D3D3D]">
          <div>
            <MessageChatSender/>

          </div>
        </div>
    )
};

export default MessageChats;
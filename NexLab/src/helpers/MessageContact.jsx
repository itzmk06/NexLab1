import MessageUserCards from "./MessageUserCards";
import {dummyMessages} from "../Constants/constant.js"

const MessageContactSection=()=>{
    return(
        <div className="w-[25%] shrink-0 h-screen mt-12 mx-2 rounded-t-lg px-2  overflow-y-auto pb-2  max-h-[calc(100vh-3rem)] bg-[#3D3D3D] text-zinc-200 text-base">
            <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold flex  items-center justify-between ">
                    <h1>Messages</h1>
                    <i className="fi fi-sr-menu-dots-vertical text-base my-3 cursor-pointer"></i>
                </div>
                <div>
                    <div className="flex text-sm items-center bg-[#202020] px-2 justify-start outline-offset-0 rounded-md outline-none outline-double border-none hover:outline-[#00BFFF]">
                    <i className="fi fi-br-search text-base"></i>
                        <input type="text" placeholder="Search for messages, groups & more..." className="pb-1 bg-[#202020] px-2 bg-opacity-60 w-full h-10 outline-none  "  />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-1 ">
                 {
                    dummyMessages.map((message)=>{
                        return <MessageUserCards data={message} key={message.id}/>
                    })

                 }

                </div>
            </div>
        </div>
    )
};

export default MessageContactSection;
import MessageChatCard from "./MessageChatCard";
import { messages } from "../Constants/constant";


const MessageChatSender=()=>{
    return(
        <div className="w-full h-full">
            <div>
            <div className="flex text-center justify-center items-center">
                <div className="-ml-10 text-xs bg-zinc-900 flex items-center justify-center rounded-full h-6  px-2 py-2 text-zinc-200">
                    <h1>Today</h1>
                </div>
            </div>
                <div >
                    {
                        messages.map((message,id)=>{
                            return <MessageChatCard message={message} key={id}/>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default MessageChatSender;
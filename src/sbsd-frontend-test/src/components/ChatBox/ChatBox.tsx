import ChatBar from "./ChatBar";
import ChatHistory from "./ChatHistory";

export default function ChatBox() {
    return(
        <div className="h-[100vh] w-[50%] flex flex-col justify-between items-center py-1 rounded border-2 border-black bg-green-200">
            <ChatHistory/>
            <ChatBar/>
        </div>
    );
};

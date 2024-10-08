
export default function ChatBar() {
    return(
        <div className="p-12 w-[100%] flex items-center justify-center bg-blue-50">
            <form id="form1" className="w-[100%] flex items-center justify-center">
                <input type="text" className="w-[60%] rounded-l border-2 border-r-0 text-black border-black pl-1 py-1"/>
                <button type="submit" form="sendForm" value="Send" className="rounded-r border-2 border-black bg-white text-black p-1 pr-1.5">Send</button>
            </form> 
    </div> 
  );
};

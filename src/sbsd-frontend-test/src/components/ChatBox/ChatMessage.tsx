import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
  text: string;
  fromBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({text, fromBot}) => {
    const botStyle = {
        background: fromBot ? 'DarkGrey' : 'AliceBlue',
        alignItems: fromBot ? 'start' : 'start',
        alignSelf: fromBot ? 'start' : 'end'
    }

    return(
        <div className="max-w-[85%] h-min p-4 border-zinc-800 border-2 rounded flex flex-col justify-center" style={botStyle}>
            <Markdown 
                className="text-black" 
                remarkPlugins={[remarkGfm]}
                components={{
                    ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} {...props} />,
                    ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} {...props} />,
                }}
            >
                {text}
            </Markdown>
        </div>
    );
};

export default ChatMessage;
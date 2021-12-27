import React from 'react';
import {v4 as uuidv4} from 'uuid'
import {useMessage} from "../context/MessageProvider";

const ChatView = ({sender}) => {
    const {messages} = useMessage()

    return (
        <div className="ChatLayout__ChatView">
            {messages.map((message, index) => (
                <div key={uuidv4()} className={sender === message.sender
                    ? "ChatLayout__ChatMessage_FromMe"
                    : "ChatLayout__ChatMessage_FromOther"}>
                    {message.senderName}: {message.text}
                </div>
            ))}
        </div>
    );
};

export default ChatView;

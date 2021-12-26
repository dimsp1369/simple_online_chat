import React from 'react';
import {v4 as uuidv4} from 'uuid'
import {useMessage} from "../context/MessageProvider";

const ChatView = () => {
    const {messages} = useMessage()

    return (
        <div className="ChatLayout__ChatView">
            {messages.map((message, index) => <div key={uuidv4()} className="ChatLayout__ChatMessage">{message}</div>)}
        </div>
    );
};

export default ChatView;

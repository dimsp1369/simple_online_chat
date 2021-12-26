import React, {useState} from 'react';
import {useMessage} from "../context/MessageProvider";

const ChatInput = () => {
    const [text, setText] = useState('')
    const {createMessage} = useMessage()

    const submitHandler = (e) => {
        e.preventDefault()
        if (text) createMessage(text)
        setText('')
    }

    return (
        <form onSubmit={submitHandler} className="ChatLayout__ChatInputForm">
            <textarea rows={3} value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
};

export default ChatInput;

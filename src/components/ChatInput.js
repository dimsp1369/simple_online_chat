import React, {useState} from 'react';
import {useMessage} from "../context/MessageProvider";
import {useContact} from "../context/ContactProvider";

const ChatInput = ({sender}) => {
    const [text, setText] = useState('')
    const {sendMessage} = useMessage()
    const {contacts} = useContact()
    const senderName = contacts.find(el => el.userId === sender).userName

    const submitHandler = (e) => {
        e.preventDefault()
        if (text) sendMessage(text, sender, senderName)
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

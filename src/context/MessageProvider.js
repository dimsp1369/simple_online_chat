import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useSocket} from "./SocketProvider";
import useLocalStorage from "../components/hook/useLocalStorage";

const MessageContext = React.createContext()

export function useMessage() {
    return useContext(MessageContext)
}

const MessageProvider = ({children}) => {
    const [messages, setMessages] = useLocalStorage('message', [])
    const socket = useSocket()

    const createMessage = (text) => {
        socket.emit('send-message', text)
        setMessages(prevState => [...prevState, text])
    }

    // useEffect(() => {
    //     if (socket !== {}) {
    //         socket.on('get-message', createMessage)
    //     }
    //     return () => socket.off('get-message')
    // }, [socket])

    return (
        <MessageContext.Provider value={{messages, createMessage}}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageProvider;

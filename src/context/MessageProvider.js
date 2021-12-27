import React, {useContext, useEffect} from 'react';
import {useSocket} from "./SocketProvider";
import useLocalStorage from "../components/hook/useLocalStorage";

const MessageContext = React.createContext()

export function useMessage() {
    return useContext(MessageContext)
}

const MessageProvider = ({children}) => {
    const [messages, setMessages] = useLocalStorage('message', [])
    const socket = useSocket()

    const sendMessage = (text, sender, senderName) => {
        socket.emit('send-message', {text, sender, senderName})
    }

    useEffect(() => {
        if (socket == null) return
        socket.on('get-message', ({text, sender, senderName}) => {
            setMessages(prevState => [...prevState, {text, sender, senderName}])
        })
        return () => socket.off('get-message')
    }, [socket])

    return (
        <MessageContext.Provider value={{messages, sendMessage}}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageProvider;

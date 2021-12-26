import React from 'react';
import SocketProvider from "./SocketProvider";
import ContactProvider from "./ContactProvider";
import MessageProvider from "./MessageProvider";

const ContextProvider = ({children, id}) => {
    return (
        <SocketProvider id={id}>
            <ContactProvider>
                <MessageProvider>
                    {children}
                </MessageProvider>
            </ContactProvider>
        </SocketProvider>
    );
};

export default ContextProvider;

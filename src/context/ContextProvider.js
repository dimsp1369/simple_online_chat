import React from 'react';
import SocketProvider from "./SocketProvider";
import ContactProvider from "./ContactProvider";
import MessageProvider from "./MessageProvider";
import ModalProvider from "./ModalProvider";

const ContextProvider = ({children, id}) => {
    return (
        <SocketProvider id={id}>
            <ModalProvider>
                <ContactProvider>
                    <MessageProvider>
                        {children}
                    </MessageProvider>
                </ContactProvider>
            </ModalProvider>
        </SocketProvider>
    );
};

export default ContextProvider;

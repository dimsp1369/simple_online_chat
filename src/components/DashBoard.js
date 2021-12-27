import React from 'react';
import SidePanel from "./SidePanel";
import ChatLayout from "./layouts/ChatLayout";
import ChatView from "./ChatView";
import ChatInput from "./ChatInput";
import MainLayout from "./layouts/MainLayout";

const DashBoard = ({id}) => {

    return (
            <MainLayout>
                <SidePanel id={id}/>
                <ChatLayout>
                    <ChatView sender={id}/>
                    <ChatInput sender={id}/>
                </ChatLayout>
            </MainLayout>

    );
};

export default DashBoard;

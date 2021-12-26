import './App.scss';
import MainLayout from "./components/layouts/MainLayout";
import SidePanel from "./components/SidePanel";
import ChatLayout from "./components/layouts/ChatLayout";
import {useState} from "react";
import Login from "./components/Login";
import ContextProvider from "./context/ContextProvider";
import ChatView from "./components/ChatView";
import ChatInput from "./components/ChatInput";
import useLocalStorage from "./components/hook/useLocalStorage";


function App() {
    const [id, setId] = useLocalStorage('id')

    return (
        <ContextProvider id={id}>
            {!id ? <Login onSubmit={setId}/>
                : <MainLayout>
                    <SidePanel id={id}/>
                    <ChatLayout>
                        <ChatView/>
                        <ChatInput/>
                    </ChatLayout>
                </MainLayout>}
        </ContextProvider>
    );
}

export default App;


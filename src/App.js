import './App.scss';
import Login from "./components/Login";
import ContextProvider from "./context/ContextProvider";
import useLocalStorage from "./components/hook/useLocalStorage";
import DashBoard from "./components/DashBoard";


function App() {
    const [id, setId] = useLocalStorage('id')

    return (
        <ContextProvider id={id}>
            {!id ? <Login onSubmit={setId}/> : <DashBoard id={id}/>}
        </ContextProvider>
    );
}

export default App;


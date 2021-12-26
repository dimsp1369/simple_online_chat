import React, {useContext} from 'react';
import useLocalStorage from "../components/hook/useLocalStorage";

const ContactContext = React.createContext()

export function useContact() {
    return useContext(ContactContext)
}

const ContactProvider = ({children}) => {
    const [contacts, setContact] = useLocalStorage('contacts', [])

    const createContact = (id, name) => {
        setContact(prevState => {
            return [...prevState, {id, name}]
        })
    }


    return (
        <ContactContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;

import React from 'react';
import {useContact} from "../context/ContactProvider";

const Contacts = ({id}) => {
    const {contacts} = useContact()

    return (
        <div>
            Contacts:
            {contacts.map(contact => <div key={contact.id}>{contact.id === id ? 'You' : contact.name}</div>)}
        </div>
    );
};

export default Contacts;

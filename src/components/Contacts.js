import React from 'react';
import {useContact} from "../context/ContactProvider";

const Contacts = ({id}) => {
    const {contacts} = useContact()

    return (
        <>
            <div className="SidePanelLayout__Content--ContactList">
                <span> Contacts:</span>
                <div>
                    {contacts.map(contact => <div
                        key={contact.userId}>{contact.userId === id ? `You: ${contact.userName}` : contact.userName}</div>)}
                </div>
                <button>Add contact</button>
            </div>
        </>
    );
};

export default Contacts;

import React, {useRef} from 'react';
import {v4 as uuidv4} from 'uuid'
import {useContact} from "../context/ContactProvider";

const Login = ({onSubmit}) => {
    const nameRef = useRef(null)
    const {createContact} = useContact()

    const createUser = (e) => {
        e.preventDefault()
        if (nameRef.current.value) {
            const id = uuidv4()
            createContact(id, nameRef.current.value)
            onSubmit(id)
        }
        nameRef.current.value = ''
    }

    return (
        <div className='LoginLayout'>
            <form onSubmit={createUser}>
                <input ref={nameRef}/>
                <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default Login;

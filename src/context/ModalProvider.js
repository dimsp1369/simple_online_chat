import React, {useContext, useState} from 'react';

const ModalContext = React.createContext()

export function useModal() {
    return useContext(ModalContext)
}

const ModalProvider = ({children}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <ModalContext.Provider value={{show, handleShow, handleClose}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;

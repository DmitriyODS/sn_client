import {createContext, useState} from "react";
import {useDisclosure} from "@nextui-org/react";

const ModalContext = createContext({
    isOpen: Boolean,
    onOpen: () => {
    },
    onClose: () => {
    },
});

const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{isOpen, onOpen, onClose}}>
            {children}
        </ModalContext.Provider>
    );
};

export {ModalContext, ModalProvider};

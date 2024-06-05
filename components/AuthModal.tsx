import React, { useState } from "react";
import Modal from "./Modal";

const AuthModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            title="Welcome Back"
            description="Login to Your Account"
            isOpen={isOpen}
            onChange={handleClose}
        >
            Auth Modal Children!
        </Modal>
    );
};

export default AuthModal;

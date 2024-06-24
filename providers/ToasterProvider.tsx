"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return(
        <Toaster
        toastOptions={{
            style: {
                background: '#363636',
                color: '#fff',
            }
        }}
        />
    )
}

export default ToasterProvider;
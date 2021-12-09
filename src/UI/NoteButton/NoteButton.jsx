import React from 'react';
import './style.css'

const Notebutton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default Notebutton;

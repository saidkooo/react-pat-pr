import React from 'react';

const Notebutton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default Notebutton;

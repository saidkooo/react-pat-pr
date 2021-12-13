import React from 'react';
import './style.css';

const NoteModule = ({children, visible, setVisible}) => {
    let visClass = ['module'];
    if(visible) {
        visClass = ['module', 'active'].join(' ');
    }
    return (
        <div className={visClass} onClick={() => {setVisible(false)}}>
            <div className="moduleContent" onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
}

export default NoteModule;

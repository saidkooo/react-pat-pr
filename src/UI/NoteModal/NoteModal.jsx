import React from 'react';
import './style.css';

const NoteModal = ({children, visible, setVisible}) => {
    let visClass = ['modal'];
    if(visible) {
        visClass = ['modal', 'active'].join(' ');
    }
    return (
        <div className={visClass} onClick={() => {setVisible(false)}}>
            <div className="modalContent" onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
}

export default NoteModal;

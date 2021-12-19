import React from 'react';
import './Note.css'

const Note = ({note, remove, edit}) => {
    return (
        <div className='note__wrapper'>
            <div className="note" onClick={() => edit(note)}>
                <div className="note__title">
                    <h2>{note.title}</h2>
                    <p onClick={() => remove(note.id)} title="Удалить">&times;</p>
                </div>
                
                <p>{note.descr}</p>
            </div>
        </div>
    );
}

export default Note;

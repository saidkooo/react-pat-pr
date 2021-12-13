import React from 'react';
import './Note.css'
import NoteButton from '../../UI/NoteButton/NoteButton'

const Note = ({number, note, remove}) => {
    return (
        <div className='note__wrapper'>
            <div className="note">
                <div className="note__title">
                    <h2>{note.title}</h2>
                    <p onClick={() => remove(note.id)} title="Удалить">&times;</p>
                </div>
                
                <p>{note.descr}</p>
                <NoteButton className='green'>Редактировать</NoteButton>
                <NoteButton className='red' >Удалить</NoteButton>
            </div>
        </div>
    );
}

export default Note;

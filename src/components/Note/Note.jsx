import React from 'react';
import './Note.css'
import NoteButton from '../../UI/NoteButton/NoteButton'

const Note = ({number, note, remove}) => {
    return (
        <li className="Note">
            <h2><i>{number + 1}</i> {note.title}</h2>
            <p>{note.descr}</p>
            <NoteButton>Редактировать</NoteButton>
            <NoteButton onClick={() => remove(note.id)}>Удалить</NoteButton>
        </li>
    );
}

export default Note;

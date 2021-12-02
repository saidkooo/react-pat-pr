import React from 'react';
import './Note.css'
import NoteButton from '../../UI/NoteButton/NoteButton'

const Note = ({id, title, descr}) => {
    return (
        <li className="Note">
            <h2><i>{id}.</i> {title}</h2>
            <p>{descr}</p>
            <NoteButton>Edit</NoteButton>
            <NoteButton>Delete</NoteButton>
        </li>
    );
}

export default Note;

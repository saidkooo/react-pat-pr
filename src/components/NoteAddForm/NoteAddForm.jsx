import React, {useState} from 'react';
import NoteInput from '../../UI/NoteInput/NoteInput';
import NoteButton from '../../UI/NoteButton/NoteButton';
import './style.css';


const NoteAddForm = ({add}) => {

    const [note, setNote] = useState({title: '', descr: ''});

    const addNewNote = (e) => {
        e.preventDefault();
        const newNote = {
            ...note,
            id: Date.now()
        }
        add(newNote);
        setNote({title: '', descr: ''});
      }


    return (
        <form onSubmit={addNewNote}>
            <NoteInput 
            type = 'text'
            value={note.title}
            onChange={(e) => setNote({...note, title: e.target.value })}
            placeholder = {'Название'}
            />
            <NoteInput 
            type = 'text'
            value={note.descr}
            onChange={(e) => setNote({...note, descr: e.target.value})}
            placeholder = {'Описание'}
            />
            <NoteButton className='green'>Add</NoteButton>
        </form>
    );
}

export default NoteAddForm;

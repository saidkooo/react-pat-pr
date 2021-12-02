import React from 'react';
import NoteList from "./components/NoteList/NoteList"
import NoteInput from "./UI/NoteInput/NoteInput";
import NoteButton from "./UI/NoteButton/NoteButton";
import { useState } from 'react';




function App() {
  const [notes, setNotes] = useState([
    {id: 0, title: 'Title 1', descr: 'Descr 1'},
    {id: 1, title: 'Title 2', descr: 'Descr 2'},
    {id: 2, title: 'Title 3', descr: 'Descr 3'},
    {id: 3, title: 'Title 4', descr: 'Descr 4'},
    {id: 4, title: 'Title 5', descr: 'Descr 5'}
  ]);


  let [noteTitle, setNoteTitle] = useState('');
  let [noteDescr, setNoteDescr] = useState('');

  const addNewNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      descr: noteDescr
    };
    setNotes([...notes, newNote]);
    setNoteTitle('');
    setNoteDescr('');
  }

  return (
    <div className="App">
      <form onSubmit={addNewNote}>
        <NoteInput 
          type = 'text'
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder = {'Input title of note'}
        />
        <NoteInput 
          type = 'text'
          value={noteDescr}
          onChange={(e) => setNoteDescr(e.target.value)}
          placeholder = {'Input description of note'}
        />
        <NoteButton>Add</NoteButton>
      </form>
      <NoteList notes = {notes} />
    </div>
  );
}

export default App;

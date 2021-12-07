import React, { useState } from 'react';
import NoteList from "./components/NoteList/NoteList"
import NoteInput from "./UI/NoteInput/NoteInput";
import NoteButton from "./UI/NoteButton/NoteButton";
import NoteFilter from './UI/NoteFilter/NoteFilter';




function App() {
  const [notes, setNotes] = useState([
    {id: 0, title: 'First Title', descr: 'Descr 1'},
    {id: 1, title: 'Second Title', descr: 'Descr 2'},
    {id: 2, title: 'Third Title', descr: 'Descr 3'},
    {id: 3, title: 'Fourth Title', descr: 'Descr 4'},
    {id: 4, title: 'Fifth Title', descr: 'Descr 5'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');
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

  const removeNote = (noteId) => {
    setNotes(notes.filter(n => n.id !== noteId))
  }

  const sortNote = (sort) => {
    console.log('#### sort:', sort);
    setSelectedSort(sort);
    console.log('#### selected sort:', sort);
    setNotes([...notes].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <form onSubmit={addNewNote}>
        <NoteInput 
          type = 'text'
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder = {'Название'}
        />
        <NoteInput 
          type = 'text'
          value={noteDescr}
          onChange={(e) => setNoteDescr(e.target.value)}
          placeholder = {'Описание'}
        />
        <NoteButton>Add</NoteButton>
      </form>
      <NoteFilter
        defaultValue=''
        options={[{value: 'title', title: 'По названию'}, {value: 'descr', title: 'По содержанию'}]}
        value={selectedSort}
        sort={sortNote}
      />
      {notes.length == 0 
        ? <h2>Записей пока нет</h2>
        : <NoteList notes={notes} remove={removeNote}/>
      }
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useNotes } from './hooks/useNotes';
import NoteList from "./components/NoteList/NoteList"
import NoteAddForm from './components/NoteAddForm/NoteAddForm';
import NotesFilter from './components/NotesFilter/NotesFilter';
import NoteModule from './UI/NoteModule/NoteModule';
import NoteButton from './UI/NoteButton/NoteButton';

import storage from './storage.json';
import Loading from './UI/Loading/Loading';






function App() {
  /* Main state */
  const [notes, setNotes] = useState([]);
  /* Loading state */
  const [notesLoading, setNotesLoading] = useState(false);
  /* Filters states */
  const [filter, setFilter] = useState({sortQuery: '', searchQuery: ''});
  /* Module visibility state */
  const [moduleVis, setModuleVis] = useState(false);
  /* Call search and sort hook */
  const sortedAndFoundedNotes = useNotes(notes, filter.sortQuery, filter.searchQuery);

  /* Getting notes from JSON */
  useEffect(() => {
    setNotesLoading(true);
    /* Loading notes simulation */
    setTimeout(() => {
      setNotes(storage.notes)
      console.log(notes)
      setNotesLoading(false)
    }, 1000)
    
  }, []);

  /* Add new note function */
  const addNewNote = (newNote) => {
    setNotes([newNote, ...notes]);

    /*Close module*/
    setModuleVis(false)
  }

  /* Remove note function */
  const removeNote = (noteId) => {
    setNotes(notes.filter(n => n.id !== noteId));
  }

  return (
    <div className="App">
      <NoteButton 
        style={{marginBottom: 30}} 
        className={'blue'}
        onClick={() => setModuleVis(true)}
      >
        Добавить запись
      </NoteButton>
      <NoteModule visible={moduleVis} setVisible={setModuleVis}>
        <NoteAddForm add={addNewNote}/>
      </NoteModule>
      <NotesFilter filter={filter} setFilter={setFilter}/>
        {notesLoading
          ? <div style={{display: 'flex', justifyContent: 'center'}}><Loading/></div>
          : <NoteList notes={sortedAndFoundedNotes} remove={removeNote}/>
        }
    </div>
  );
}

export default App;

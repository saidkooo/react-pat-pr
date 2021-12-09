import React, { useState, useMemo } from 'react';
import NoteList from "./components/NoteList/NoteList"
import NoteAddForm from './components/NoteAddForm/NoteAddForm';
import NotesFilter from './components/NotesFilter/NotesFilter'





function App() {
  const [notes, setNotes] = useState([
    {id: 0, title: 'First Title', descr: 'Descr 1'},
    {id: 1, title: 'Second Title', descr: 'Descr 2'},
    {id: 2, title: 'Third Title', descr: 'Descr 3'},
    {id: 3, title: 'Fourth Title', descr: 'Descr 4'},
    {id: 4, title: 'Fifth Title', descr: 'Descr 5'}
  ]);

  const [filter, setFilter] = useState({sortQuery: '', searchQuery: ''});
  
  const foundedNotes = useMemo(() => {
    console.log(filter.sortQuery)
    if(filter.sortQuery) {
      return [...notes].sort((a, b) => a[filter.sortQuery].localeCompare(b[filter.sortQuery]));
    } else {
      return notes;
    }
  }, [filter.sortQuery, notes]);

  const sortedAndFoundedNotes = useMemo(() => {
    console.log(filter.searchQuery)
    return foundedNotes.filter(note => note.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [foundedNotes, filter.searchQuery])

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNote = (noteId) => {
    setNotes(notes.filter(n => n.id !== noteId))
  }

  return (
    <div className="App">
      <NoteAddForm add={addNewNote}/>
      <NotesFilter filter={filter} setFilter={setFilter}/>
      {sortedAndFoundedNotes.length 
        ? <NoteList notes={sortedAndFoundedNotes} remove={removeNote}/>
        : <h2>Записей пока нет</h2>
      }
    </div>
  );
}

export default App;

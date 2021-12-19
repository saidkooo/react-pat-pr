import React, { useState, useEffect } from 'react';
import { useNotes } from '../../hooks/useNotes';
import NoteList from "../../components/NoteList/NoteList"
import NoteAddForm from '../../components/NoteAddForm/NoteAddForm';
import NotesFilter from '../../components/NotesFilter/NotesFilter';

import NoteModal from '../../UI/NoteModal/NoteModal';
import NoteButton from '../../UI/NoteButton/NoteButton';
import Loading from '../../UI/Loading/Loading';
import EditModal from '../../UI/EditModal/EditModal';

import './style.css'

import storage from '../../storage.json';


const NotesPage = () => {
    /* Main state */
    const [notes, setNotes] = useState([]);
    /* Loading state */
    const [notesLoading, setNotesLoading] = useState(false);
    /* Filters states */
    const [filter, setFilter] = useState({sortQuery: '', searchQuery: ''});
    /* Modal visibility state */
    const [modalVis, setModalVis] = useState(false);
    /* Call search and sort hook */
    const sortedAndFoundedNotes = useNotes(notes, filter.sortQuery, filter.searchQuery);

    const [editModalVis, setEditModalVis] = useState(false);

    const [editableNote, setEditableNote] = useState({title: '', descr: '', id: '', userId: ''});

    /* Getting notes from JSON */
    useEffect(() => {
      setNotesLoading(true);
      /* Loading notes simulation */
      setTimeout(() => {
        setNotes(storage.notes);
        setNotesLoading(false);
        }, 1000);
    }, []);

  /* Add new note function */
  const addNewNote = (newNote) => {
    setNotes([newNote, ...notes]);

    /*Close modal*/
    setModalVis(false);
  }

  /* Remove note function */
  const removeNote = (noteId) => {
    setNotes(notes.filter(n => n.id !== noteId));
  }
  /* Edit note function */
  const editNote = (note) => {
    setEditModalVis(true);
    setEditableNote({...note});
  }

  const saveEditedNote = (editedNote) => {
    setNotes([...notes, editedNote]);
    setEditableNote({title: '', descr: '', id:'', userId:''});
    setEditModalVis(false);
  }

    return (
      <div className='notes__page'>
        <NoteButton 
          style={{marginBottom: 30}} 
          className={'blue'}
          onClick={() => setModalVis(true)}
        >
          Добавить запись
        </NoteButton>
        <NoteModal visible={modalVis} setVisible={setModalVis}>
          <NoteAddForm add={addNewNote}/>
        </NoteModal>
        <EditModal visibility={editModalVis} note={editableNote} save={saveEditedNote}/>
        <NotesFilter filter={filter} setFilter={setFilter}/>
        {
          notesLoading
          ? <div style={{display: 'flex', justifyContent: 'center'}}><Loading/></div>
          : <NoteList notes={sortedAndFoundedNotes} remove={removeNote} edit={editNote}/>
        }
      </div>
    );
}

export default NotesPage;

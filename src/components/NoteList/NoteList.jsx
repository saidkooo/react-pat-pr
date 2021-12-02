import Note from '../Note/Note';
import './NoteList.css';

const NoteList = ({notes}) => {
    return (
        <ul className="noteList">
            {
                notes.map(note => 
                    <Note key={note.id+1} id={note.id+1} title={note.title} descr={note.descr}/>
                )
            }
        </ul>
    );
}

export default NoteList;

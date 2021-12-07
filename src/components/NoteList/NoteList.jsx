import Note from '../Note/Note';
import './NoteList.css';

const NoteList = ({notes, remove}) => {
    return (
        <ul className="noteList">
            {
                notes.map((note, index) => 
                    <Note key={note.id} number={index} note={note} remove={remove}/>
                )
            }
        </ul>
    );
}

export default NoteList;

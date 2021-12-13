import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Note from '../Note/Note';
import './NoteList.css';

const NoteList = ({notes, remove}) => {
    return (
        <>  
        {
        notes.length 
        ?
        <TransitionGroup className="noteList">
            {
                notes.map((note, index) => 
                    <CSSTransition 
                        key={note.id}
                        timeout={500}
                        classNames='note'
                    >
                        <Note number={index} note={note} remove={remove}/>
                    </CSSTransition>
                )
            }
        </TransitionGroup>
        : <h2>Записей нет</h2>
        }
        </>
    );
}

export default NoteList;

import React from 'react';
import Notebutton from '../NoteButton/NoteButton';
import Noteinput from '../NoteInput/NoteInput';
import './style.css';

const EditModal = ({visibility, note, save}) => {
    let visible = 'editModal';
    
    if(visibility) {
        visible = ['editModal', 'active'].join(' ');
    }  

    return (
        <div className={visible}>
            <form>
                <Noteinput value={note.title}/>
                <Noteinput value={note.descr}/>
                <Notebutton className="green" onClick={save}>Сохранить</Notebutton>
            </form>
        </div>
    );
}

export default EditModal;

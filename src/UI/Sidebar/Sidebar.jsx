import React from 'react';
import Navbar from '../Navbar/Navbar';
import Noteinput from '../NoteInput/NoteInput';
import './style.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__block'>
                <p>Добро пожаловать! Пользователь</p>
            </div>
            <hr/>
            <div className="sidebar__block">
                <Noteinput placeholder='Поиск...'/>
            </div>
            <hr/>
            <div className='sidebar__block'>
                <Navbar/>
            </div>
        </div>
    );
}

export default Sidebar;

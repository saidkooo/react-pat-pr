import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__item">
                <Link to="/">Главная</Link>
            </div>
            <div className={["navbar__item", "active"].join(' ')}>
                <Link to="/notes">Заметки</Link>
            </div>
            <div className="navbar__item">
                <Link to="/notes">Списки</Link>
            </div>
            <div className="navbar__item">
                <Link to="/notes">Напоминания</Link>
            </div>
            <div className="navbar__item">
                <Link to="/notes">Блокноты</Link>
            </div>
        </div>
        
    );
}

export default Navbar;

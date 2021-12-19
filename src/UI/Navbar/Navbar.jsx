import React, { useState } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './style.css';

const Navbar = () => {
    const [navItems, setNavItems] = useState([
        {navItemName: 'Главная', active: false, path: '/'},
        {navItemName: 'Заметки', active: true, path: '/notes'},
        {navItemName: 'Списки', active: false, path: '/'},
        {navItemName: 'Напоминания', active: false, path: '/notes'},
        {navItemName: 'Блокноты', active: false, path: '/'}
    ]);

    const changeNavItemActive = (itemName) => {
        setNavItems(navItems.map(item => 
            itemName === item.navItemName ? {...item, active: true} : {...item, active: false}
        ))
    }

    return (
        <div className='nav'>
            {
                navItems.map(item => 
                    <NavbarItem key={item.navItemName} item={item} itemActive = {changeNavItemActive}/>
                )
            }
        </div>
        
    );
}

export default Navbar;

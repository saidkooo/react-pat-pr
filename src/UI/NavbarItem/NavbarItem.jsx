import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const NavbarItem = ({item, index, itemActive}) => {
    return (
            <Link 
            className={item.active ? ['nav__item', 'active'].join(' ') : 'nav__item'} 
            onClick={() => itemActive(item.navItemName)}
            to={item.path}>
                {item.navItemName}
            </Link>
    );
}

export default NavbarItem;

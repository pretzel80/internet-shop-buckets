import React from 'react';
import "./Sidebar.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li className="sidebar-list">
                    <NavLink exact to="/shop" className='sidebar-link' activeClassName='selected'>Каталог товаров</NavLink>
                    <NavLink exact to="/favorites" className='sidebar-link' activeClassName='selected'>Избранные товары</NavLink>
                    <NavLink exact to="/cart" className='sidebar-link' activeClassName='selected'>Корзина покупателя</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
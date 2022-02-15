import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className="container">
            <NavLink className="navbar-brand" to="/">Github поиск</NavLink>
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <NavLink to="/" className='nav-link'>Главная</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/about" className='nav-link'>Информация</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

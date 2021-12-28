import React from 'react';
import './style.scss';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;
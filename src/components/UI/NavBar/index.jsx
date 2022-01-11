import React from 'react';
import './style.scss';
import {Link, NavLink, useNavigate} from "react-router-dom";

const NavBar = ({setIsAuth}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsAuth(false);
    navigate('/login');
    localStorage.removeItem('isAuth');
  }

    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <span className='sig-out' onClick={handleClick}>sign out</span>
            </nav>
        </div>
    );
};

export default NavBar;
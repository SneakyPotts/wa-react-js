import React, {useContext} from 'react';
import './style.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";
import {useDispatch} from "react-redux";
import {setAuthRedux} from "../../../store/actions/auth";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAuthRedux(false));
    navigate('/login');
    localStorage.removeItem('isAuth');
  }

  const { setIsAuth } = useContext(AuthContext);
  return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/counter">Counter</NavLink>
                <span className='sig-out' onClick={handleClick}>sign out</span>
            </nav>
        </div>
    );
};

export default NavBar;
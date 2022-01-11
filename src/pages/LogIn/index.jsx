import React from 'react';
import './style.scss';
import {useNavigate} from "react-router-dom";


const LogIn = ({setIsAuth}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsAuth(true);
    navigate('/');
    localStorage.setItem('isAuth', true);
  }
  return (
    <div className='signin'>
      <h1>Sign in</h1>
      <button onClick={handleClick}>send</button>
    </div>
  );
};

export default LogIn;
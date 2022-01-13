import React, {useContext} from 'react';
import './style.scss';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";


const LogIn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsAuth(true);
    navigate('/');
    localStorage.setItem('isAuth', true);
  }
  const { setIsAuth } = useContext(AuthContext);

  return (
    <div className='signin'>
      <h1>Sign in</h1>
      <button onClick={handleClick}>send</button>
    </div>
  );
};

export default LogIn;
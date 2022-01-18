import React, {useContext} from 'react';
import './style.scss';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {setAuthRedux} from "../../store/actions/auth";


const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAuthRedux(true));
    navigate('/');
    localStorage.setItem('isAuth', true);
  }
  // const { setIsAuth } = useContext(AuthContext);

  return (
    <div className='signin'>
      <h1>Sign in</h1>
      <button onClick={handleClick}>send</button>
    </div>
  );
};

export default LogIn;
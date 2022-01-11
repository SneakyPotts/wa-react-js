import React from 'react';
import NavBar from "../UI/NavBar";
import {Outlet} from "react-router-dom";

const Layout = ({setIsAuth}) => {
  return (
    <>
      <NavBar setIsAuth={setIsAuth}/>
      <Outlet/>
    </>
  );
};

export default Layout;
import React, {useState} from "react";
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/inde";
import LogIn from "./pages/LogIn";
import { routes } from "./routes";
import RequireAuth from "./HOC/RequireAuth";
import {AuthContext} from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}} >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                  {routes.map(i =>
                    <Route path={i.path} element={
                      i.isPrivate
                      ? <RequireAuth isAuth={isAuth}>
                          {i.element}
                        </RequireAuth>
                      : i.element
                    } />
                  )}
                </Route>
              <Route path='/login' element={<LogIn />} />
              <Route path='*' element={<Navigate to={isAuth ? '/' : '/login'} replace />} />
            </Routes>
        </BrowserRouter>
    </AuthContext.Provider>
    );
}

export default App;

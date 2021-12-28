import React from "react";
import './App.scss';
import Posts from "./pages/Posts";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout/inde";
import Post from "./pages/Post";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Posts/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/post/:id' element={<Post/>}/>
                </Route>
              <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

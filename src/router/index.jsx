import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import {Profile} from "../pages/Profile";

export const Router = () => {
    return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </BrowserRouter>
    );
}
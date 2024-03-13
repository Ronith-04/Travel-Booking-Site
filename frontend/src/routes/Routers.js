import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import TourDetails from "./../pages/TourDetails";
import Tours from "./../pages/Tours";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "./../pages/ThankYou";
import About from "./../pages/About";
import Gallery from "./../pages/Gallery";


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Tour/:id' element={<TourDetails/>}/>
            <Route path='/Tours' element={<Tours/>}/>
            <Route path='/Thank-you' element={<ThankYou/>}/>
            <Route path='/Tours/search' element={<SearchResultList/>}/>
        </Routes>
        
    );
}

export default Routers;
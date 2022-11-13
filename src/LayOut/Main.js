import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Sherade/Footer/Footer';
import NavBar from '../Pages/Sherade/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
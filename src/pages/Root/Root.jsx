import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar />
            <div className='text-9xl text-red-600 font-bold'>class no 8 completed</div>
            <Outlet/>

            
            <Footer />
        </div>
    );
};

export default Root;
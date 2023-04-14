import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-[#F4F4F4]'>
            <div className='w-[85%] mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
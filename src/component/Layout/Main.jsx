import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <div className='w-[85%] mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#F4F4F4] py-10 px-4'>
            <div className="navbar ">
                <div className="navbar-start">
                    
                    <h3 className="normal-case text-2xl font-semibold">Job Hunting</h3>
                </div>
                <div className="lg:flex ">
                    <ul className="md:flex md:gap-14  px-1 text-sm font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/appliedjobs'>Applied Jobs</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ml-12">
                    <a className="btn bg-purple-500">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
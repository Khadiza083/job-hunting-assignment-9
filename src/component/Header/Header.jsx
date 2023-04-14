import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className="navbar ">
                <div className="navbar-start">
                    
                    <h3 className="normal-case text-2xl font-semibold">Job Hunting</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/appliedjobs'>Applied Jobs</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-purple-500">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import picture1 from './../../assets/picture1.png'
const Banner = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
                    <img src={picture1} className="max-w-2xl rounded-lg" />
                    <div>
                        <h1 className="font-bold leading-[100px] text-[80px]">One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job!</span></h1>
                        <p className="py-6 leading-[30px] text-[18px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div className="navbar-end">
                            <a className="btn bg-purple-500">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
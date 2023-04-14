import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Category.css'

const Category = () => {
    return (
        <div >
            <div className='text-center'>
                <h1 className='text-5xl font-semibold mb-4'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-4 gap-6 mt-8'>
                <div className='category p-10 w-full'>
                    <div className='bg-gray-300 w-[70px] h-[80px] p-4 mb-8 rounded-lg text-[#9f7aea]'>
                        <FontAwesomeIcon className='text-5xl' icon={faCalculator}></FontAwesomeIcon>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Account & Finance</h3>
                    <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
                <div className='category p-10'>
                    <div className='bg-gray-300 w-[70px] h-[80px] p-4 mb-8 rounded-lg text-[#9f7aea]'>
                        <FontAwesomeIcon className='text-5xl' icon={faCalculator}></FontAwesomeIcon>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Account & Finance</h3>
                    <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
                <div className='category p-10'>
                    <div className='bg-gray-300 w-[70px] h-[80px] p-4 mb-8 rounded-lg text-[#9f7aea]'>
                        <FontAwesomeIcon className='text-5xl' icon={faCalculator}></FontAwesomeIcon>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Account & Finance</h3>
                    <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
                <div className='category p-10'>
                    <div className='bg-gray-300 w-[70px] h-[80px] p-4 mb-8 rounded-lg text-[#9f7aea]'>
                        <FontAwesomeIcon className='text-5xl' icon={faCalculator}></FontAwesomeIcon>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>Account & Finance</h3>
                    <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                </div>
            </div>

        </div>
    );
};

export default Category;
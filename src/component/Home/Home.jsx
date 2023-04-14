import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const jobs = useLoaderData()
    // console.log(jobs);
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Jobs jobs={jobs}></Jobs>
        </div>
    );
};

export default Home;
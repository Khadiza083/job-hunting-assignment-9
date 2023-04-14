import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const [appliedJob, setAppliedJob] = useState([])
    console.log(appliedJob);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('jobs'))
        if (storedData) {
            setAppliedJob(storedData)
        }
    }, [])
    return (
        <div className='my-4'>
            {
                appliedJob.map(job=><Job job={job}></Job>)
            }
        </div>
    );
};

export default AppliedJobs;
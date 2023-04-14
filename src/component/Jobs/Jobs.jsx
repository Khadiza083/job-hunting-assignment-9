import React, { useState } from 'react';
import Job from '../Job/Job';

const Jobs = ({ jobs }) => {
    const [showAll, setShowAll] = useState(false)
    return (
        <div className='my-32'>
            <div className='text-center mb-8'>
                <h1 className='text-5xl font-semibold mb-4'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    showAll ?
                        jobs.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                        : jobs.slice(0, 4).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                }
            </div>

            <div className='mt-4 text-center'>
                {!showAll&&<button onClick={() =>setShowAll(true)} className="btn bg-purple-500">Show All</button>}
            </div>

        </div>
    );
};

export default Jobs;
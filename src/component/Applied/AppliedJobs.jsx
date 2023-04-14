import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const [appliedJob, setAppliedJob] = useState([])
    const [filterJob, setFilterJob] = useState([]);
    // console.log(appliedJob);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('jobs'))
        if (storedData) {
            setAppliedJob(storedData)
            setFilterJob(storedData)
        }
    }, [])

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = appliedJob.filter((job) => job.job_type == value);
        setFilterJob(filterData)
    }
    return (
        <div>
            <div className="my-3">
                <label htmlFor="">Filter Order: </label>
                <select onChange={handleFilter} className="select select-bordered w-full max-w-xs ml-2">
                    <option disabled selected>
                        Choose Here
                    </option>
                    <option value="Remote">Remote Jobs</option>
                    <option value="Full-time">Full Time Jobs</option>
                </select>
            </div>

            {filterJob.length > 0 ? (
                filterJob?.map((job) => (
                    <div className="my-4">
                        <Job job={job} 
                            key={job.id}
                        />
                    </div>
                ))
            ) : (
                <h1 className="text-xl text-center text-red-500">No Job Found</h1>
            )}
        </div>

    );
};

export default AppliedJobs;
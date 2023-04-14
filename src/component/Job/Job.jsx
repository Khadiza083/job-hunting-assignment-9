import { faLocation, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
    // console.log(job);
    const { id, company_logo, company_name, job_title, salary, location, job_type } = job
    // console.log(id);
    return (
        <div className="card  border-2 bg-white py-10 my-4">
            <figure className='p-6 content-start w-40 h-10 '><img src={company_logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job_title}
                </h2>
                <p>{company_name}</p>
                <div className="card-actions text-purple-500">
                    <div className="badge badge-outline p-4">Remote</div>
                    <div className="badge badge-outline p-4">Full-time</div>
                </div>
                <div className='flex w-[400px]'>
                    <p><FontAwesomeIcon className='mr-2' icon={faLocation}></FontAwesomeIcon>{location}</p>
                    <p><FontAwesomeIcon className='mr-2' icon={faSackDollar}></FontAwesomeIcon>{salary}</p>
                </div>
                <div className='mt-4'>
                    <button className="btn bg-purple-500"><Link to={`/job/${id}`}> View Details</Link></button>
                </div>
            </div>
        </div>

    );
};

export default Job;
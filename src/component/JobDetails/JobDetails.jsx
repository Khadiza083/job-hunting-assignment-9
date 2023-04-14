import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const { job_description, job_responsibilities, educational_requirements, salary, id, job_title, email, phone, address, experience } = job


    const handleJob = () => {
        const storedData = JSON.parse(localStorage.getItem("jobs"));


        if (storedData) {
            localStorage.setItem("jobs", JSON.stringify([...storedData, job]))

        } else {
            localStorage.setItem("jobs", JSON.stringify([job]))
        }

    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold text-center mb-20 py-20 bg-[#F4F4F4]'>Job Details</h1>
            <div className='flex gap-4'>
                <div className='grid gap-6 md:w-[70%]'>
                    <p className='text-lg leading-8'><span className='font-semibold'>Job Description: </span>{job_description}</p>
                    <p className='text-lg leading-8 '><span className='font-semibold'>Job Responsibility: </span>{job_responsibilities}</p>
                    <p className='text-lg leading-8'><span className='font-semibold'>Educational Requirements: </span>{educational_requirements}</p>
                    <p className='text-lg leading-8'><span className='font-semibold'>Experiences: </span>{experience}</p>
                </div>
                <div>
                    <div className='category p-8 grid gap-4'>
                        <h1 className='text-xl font-semibold border-b border-gray-400'>Job Details</h1>
                        <p className='text-lg leading-8'><span className='font-semibold'>Salary: </span>{salary}</p>
                        <p className='text-lg leading-8'><span className='font-semibold'>Job Title: </span>{job_title}</p>
                        <h1 className='text-xl font-semibold border-b border-gray-400'>Contact Information</h1>
                        <p className='text-lg leading-8'><span className='font-semibold'>Phone: </span>{phone}</p>
                        <p className='text-lg leading-8'><span className='font-semibold'>Email: </span>{email}</p>
                        <p className='text-lg leading-8'><span className='font-semibold'>Address: </span>{address}</p>
                    </div>
                    <div className="btn-ghost text-white btn w-full bg-purple-500 mt-6">
                        <button onClick={handleJob}>Apply Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;
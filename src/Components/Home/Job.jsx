import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    // console.log(job)
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id } = job;

    return (
        <div className='p-10 border border-solid border-gray-300 rounded-md'>
            <img className='w-28 h-10' src={logo} />
            <h1 className='font-semibold text-2xl mt-8'>{job_title}</h1>
            <p className='font-semibold text-2xl text-gray-500 my-2'>{company_name}</p>
            <div className='flex items-center my-2'>
                <p className='border border-solid border-indigo-600 rounded text-xs sm:text-base px-3 py-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>{remote_or_onsite}</p>
                <p className='border border-solid border-indigo-600 rounded text-xs sm:text-base px-3 py-1 font-semibold ml-2 sm:ml-5 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>{job_type}</p>
            </div>
            <div className='flex items-center my-2 font-semibold text-gray-500'>
                <img className='mr-1' src={'icons/location2.png'} />
                <p className='mr-6'>{location}</p>
                <img className='mr-1' src={'icons/money.png'} />
                <p>{salary}</p>
            </div>
            <Link to={`/view-details/${id}`}><button className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 font-semibold text-white mt-4'> View Details </button></Link>
        </div>
    );
};

export default Job;
import React from 'react';

const AppliedJob = ({ appliedJob }) => {

    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = appliedJob;
    
    
    return (
        <div className='flex items-center relative border border-solid border-slate-200 rounded-md my-6'>
            <div className='bg-slate-200 h-full w-auto px-2 md:px-5 py-12 md:py-16 m-3 md:m-6 rounded'>
                <img className='w-20 md:w-32' src={logo} />
            </div>
            <div>
                <h1 className='font-semibold md:text-2xl'>{job_title}</h1>
                <p className='font-semibold md:text-2xl text-gray-500 my-2'>{company_name}</p>
                <div className='flex items-center my-2'>
                    <p className='border border-solid border-indigo-600 rounded text-xs px-1 md:px-3 md:py-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>{remote_or_onsite}</p>
                    <p className='border border-solid border-indigo-600 rounded text-xs px-1 md:px-3 md:py-1 font-semibold ml-1 md:ml-5 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>{job_type}</p>
                </div>
                <div className='flex items-center my-2 font-semibold text-gray-500'>
                    <img className='mr-1' src={'icons/location2.png'} />
                    <p className='mr-6 text-xs'>{location}</p>
                    <img className='mr-1' src={'icons/money.png'} />
                    <p className='text-xs'>{salary}</p>
                </div>
            </div>
            <div className='absolute right-1 md:right-6'>
                <button className='text-xs md:text-base bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-2 md:px-5 py-2 font-extrabold text-white'>View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;
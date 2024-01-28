import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './AppliedJobs.css'
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    const storedJobs = getShoppingCart();

    useEffect(() => {
        const filteredJobs = [];

        for (const id in storedJobs) {
            const idInt = parseInt(id);
            const storedAppliedJobs = jobs.find(job => job.id === idInt)
            if (storedAppliedJobs) {
                filteredJobs.push(storedAppliedJobs);
            }

        }
        setAppliedJobs(filteredJobs);
    }, [])

    const [filterJobs, setFilterJobs] = useState([]);
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setFilterJobs(appliedJobs);
        }
        else if (filter === 'Remote') {
            const remote = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Remote');
            setFilterJobs(remote);
        }
        else if (filter === 'Onsite') {
            const onsite = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Onsite');
            setFilterJobs(onsite);
        }
    }


    return (
        <div>
            <nav className='navbar'>
                <div className='flex justify-between items-center pl-10 sm:px-10 lg:px-40 py-6 relative'>
                    <img className='' src={'/CareerHub.png'} />
                    <div className={`flex flex-col py-12 lg:py-0 w-full lg:w-auto bg-gray-100 lg:bg-inherit lg:block absolute text-center lg:static duration-100 ${toggleNav ? 'top-16 left-0' : '-top-60 left-0'}`}>
                        <Link className='font-bold hover:text-blue-500 mr-4 mb-2 lg:mb-0' to={'/'}>Home</Link>
                        <Link className='font-medium mr-4 hover:text-blue-500 mb-2 lg:mb-0' to={'/statistics'}>Statistics</Link>
                        <Link className='font-medium mr-4 hover:text-blue-500 mb-2 lg:mb-0' to={'/applied-jobs'}>Applied Jobs</Link>
                        <Link className='font-medium mr-4 hover:text-blue-500 mb-2 lg:mb-0' to={'/blog'}>Blog</Link>
                    </div>
                    <div className='lg:hidden  mr-2' onClick={() => setToggleNav(!toggleNav)}>
                        {
                            toggleNav === true ?
                                <XMarkIcon className="h-10 w-10 text-blue-500" />
                                : <Bars3Icon className="h-10 w-10 text-blue-500" />

                        }
                    </div>
                    <button className='hidden lg:block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 font-extrabold text-white'>Start Applying</button>
                </div>
                <p className='text-center font-extrabold text-2xl py-16 '>Applied Jobs</p>
            </nav>

            <details className="dropdown mb-36 relative sm:mx-5 lg:mx-20 xl:mx-60">
                <summary className="m-1 btn cursor-pointer absolute right-0 bg-green-600 hover:bg-green-500 font-bold text-white px-3 py-2 rounded">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 absolute right-0 top-12">
                    <li className='cursor-pointer' onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li className='cursor-pointer' onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                    <li className='cursor-pointer' onClick={() => handleJobsFilter('Onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div className='sm:mx-5 lg:mx-20 xl:mx-60 my-20'>
                {
                    appliedJobs.map(appliedJob => <AppliedJob
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;
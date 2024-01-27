import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './ViewDetails.css'
import { addToDb } from '../../utilities/fakedb';

const ViewDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const handleApplyNow = id => {
        addToDb(id)
    }

    const [toggleNav, setToggleNav] = useState(false);
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
                <p className='text-center font-extrabold text-2xl py-16 '>Job Details</p>
            </nav>
            <div className='full-details mx-5 xl:mx-40 my-12 xl:my-32'>
                <div className='description'>
                    <p className='text-stone-500 mb-6'><span className='font-extrabold text-black'>Job Description:</span> {job_description} </p>
                    <p className='text-stone-500 mb-6'><span className='font-extrabold text-black'>Job Responsibility:</span> {job_responsibility}</p>
                    <p className='font-extrabold text-black mb-3'>Educational Requirement:</p>
                    <p className='text-stone-500 mb-6'>{educational_requirements}</p>
                    <p className='font-extrabold text-black mb-3'>Experiences:</p>
                    <p className='text-stone-500'>{experiences}</p>
                </div>
                <div>
                    <div className='p-7 bg-zinc-50 rounded-md'>
                        <p className='font-extrabold text-black mb-6 text-xl'>Job Details</p>
                        <hr />
                        <div className='flex items-center mt-6'>
                            <img src={'/icons/money.png'} />
                            <p className='text-stone-500 ml-1'><span className='font-bold text-black'>Salary:</span> {salary}</p>
                        </div>
                        <div className='flex items-center mt-4 mb-8'>
                            <img src={'/icons/calendar.png'} />
                            <p className='text-stone-500 ml-1'><span className='font-bold text-black'>Job Title:</span> {job_title}</p>
                        </div>
                        <p className='font-extrabold text-black mb-6 text-xl'>Contact Information</p>
                        <hr />
                        <div className='flex items-center mt-6'>
                            <img src={'/icons/phone.png'} />
                            <p className='text-stone-500 ml-1'><span className='font-bold text-black'>Phone:</span> {contact_information.phone}</p>
                        </div>
                        <div className='flex items-center mt-4'>
                            <img src={'/icons/email.png'} />
                            <p className='text-stone-500 ml-1'><span className='font-bold text-black'>Email:</span> {contact_information.email}</p>
                        </div>
                        <div className='flex items-start mt-4'>
                            <img src={'/icons/location2.png'} />
                            <p className='text-stone-500 ml-1'><span className='font-bold text-black'>Location:</span> {contact_information.address}</p>
                        </div>
                    </div>
                    <div className='relative mt-6'>
                        <button onClick={() => handleApplyNow(id)} className=' bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md py-2 font-semibold text-white absolute w-full'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
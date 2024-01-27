import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);
    return (
        <nav className='sticky top-0 z-50'>
            <div className='flex justify-between items-center bg-white pl-10 sm:px-10 lg:px-40 py-6 shadow-md relative'>
                <img className='' src={'/CareerHub.png'} />
                <div className={`flex flex-col py-12 lg:py-0 w-full lg:w-auto bg-gray-100 lg:bg-inherit lg:block absolute text-center lg:static duration-100 ${toggleNav ? 'top-16 left-0' : '-top-60 left-0'}`}>
                    <Link className='font-bold text-blue-500 mr-4 mb-2 lg:mb-0' to={'/'}>Home</Link>
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
                <button className='hidden lg:block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 font-semibold text-white'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;
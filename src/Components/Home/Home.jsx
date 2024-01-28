import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Job from './Job';
import Header from '../Header/Header';

const Home = () => {


    const categories = useLoaderData();

    const [jobs, setJobs] = useState([]);

    const [showAllJobs, setShowAllJobs] = useState(false);

    const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 4);

    const handleShowAllJobs = () => {
        setShowAllJobs(true);
    }


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])



    return (
        <div>
            <Header></Header>
            {/* intro */}
            <div className='flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap justify-between items-center md:mx-5 xl:ml-40 xl:mr-24 my-20 text-center mx-auto'>
                <div className='md:w-1/3'>
                    <h1 className='text-3xl lg:text-5xl xl:text-7xl font-semibold'>One Step Closer To Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>Dream Job</span> </h1>
                    <p className='m-5 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 font-semibold text-white'>Get Started</button>
                </div>
                <img className='image mb-10 md:mb-0' src={'user.png'} />
            </div>

            {/* job category */}
            <div >
                <h1 className='text-center text-5xl font-bold mt-10'>Job Category List</h1>
                <p className='text-center font-medium my-8 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-5 mx-5 xl:mx-40  my-10 '>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>

            {/* Featured Jobs */}
            <div className='my-20 mx-5 xl:mx-40'>
                <h1 className='text-center text-5xl font-bold'>Featured Jobs</h1>
                <p className='text-center font-medium my-8 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-2 gap-10 '>
                    {
                        displayedJobs.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                <div>
                    {
                        !showAllJobs && (
                            <button onClick={handleShowAllJobs} className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-5 py-2 font-semibold text-white my-10 block m-auto'>See All Jobs</button>
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;
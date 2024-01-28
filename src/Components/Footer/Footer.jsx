import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-black text-gray-500 mt-40 xl:mt-0 pb-10 lg:pb-40'>
            <div className='footer-links mx-5 lg:mx-24 xl:mx-40 pt-32'>
                <div>
                    <h1 className='text-white text-3xl font-extrabold mb-2 md:mb-5'>CareerHub</h1>
                    <p className='w-72'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className='my-5' src={'/icons/social.png'} />
                </div>
                <div>
                    <h1 className='text-white text-xl font-extrabold mb-2 md:mb-5'>Company</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h1 className='text-white text-xl font-extrabold mb-2 md:mb-5'>Product</h1>
                    <p>Prototype </p>
                    <p>Plans & Pricing</p>
                    <p>Customers </p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h1 className='text-white text-xl font-extrabold mb-2 md:mb-5'>Contact</h1>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className='h-0.5 bg-gray-900 mx-5 lg:mx-24 xl:mx-40 my-5'></div>
            <div className='mx-5 lg:mx-24 xl:mx-40 block md:flex justify-between items-center'>
                <p>@2023 <span className='font-bold'>CareerHub.</span> All Rights Reserved</p>
                <p>Powered by <span className='font-bold'>CareerHub</span></p>
            </div>

        </div>
    );
};

export default Footer;
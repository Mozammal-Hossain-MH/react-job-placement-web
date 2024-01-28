import React from 'react';

const Category = ({category}) => {
    
    return (
        <div className='py-3 pl-3 sm:py-5 sm:pl-5 xl:py-10 xl:pl-10 rounded-md bg-gray-50'>
            <img className='p-4 rounded-md bg-gray-100' src={category.logo} />
            <h2 className='font-semibold text-xl'>{category.category_name}</h2>
            <p className='text-gray-500'>{category.availability}</p>
        </div>
    );
};

export default Category;
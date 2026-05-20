import React from 'react';
import { Link } from 'react-router';

const Discount = () => {
    return (
        <Link to="/categories" className='flex justify-center md:mt-10'>
            <img className='lg:h-[590px] w-full' src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/nook/hero/1725_SKB_NOOKGL4OceanTeal_Mobile.jpg" alt="" />
        </Link>
    );
};

export default Discount;
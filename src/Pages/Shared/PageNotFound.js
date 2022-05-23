import React from 'react';
import errorImg from '../../assets/images/pageNotFound/errorImg.jpg';

const PageNotFound = () => {
    return (
        <div>
            <img className='w-full' src={errorImg} alt="" />
        </div>
    );
};

export default PageNotFound;
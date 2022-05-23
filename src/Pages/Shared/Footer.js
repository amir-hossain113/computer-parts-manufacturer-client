import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='text-success text-center p-16 bg-neutral'>
            <h2 className='text-3xl font-bold'>Computer Parts Manufacturer</h2>
            <p className='text-xl'>Amir Hossain || copyright©{year}</p>
            <p className='text-xl'>Contact : 01601555830</p>
            <p className='text-xl'>Email : amirhossain.cse@gmail.com</p>
        </div>
    );
};

export default Footer;
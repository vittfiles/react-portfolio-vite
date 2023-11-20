import React from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';

function Info() {
    return ( <div className='sm:pl-4 text-left font-medium'>
        <header className='pb-4 flex flex-col items-center sm:flex-row justify-between'>
            <div className='pt-6 sm:pt-0'>
                <p className='text-black-300 text-2xl font-semibold'>Matias Martinez</p>
                <p className='text-black-200 text-lg'>Front-end developer</p>
            </div>
            <div className='pt-4 sm:pt-0'>
                <p className='text-black-300 text-lg flex items-center'><span className='pr-1 text-2xl'><HiMail /></span>billi@example.com</p>
                <p className='text-black-300 text-lg flex items-center'><span className='pr-1 text-2xl'><HiPhone /></span>(+503) 123 456 789</p>
            </div>
        </header>
        <p className='text-black-200 text-lg'>I am an Computer Engineering student with years of experience developing my own programming projects.</p>
        <p className='text-black-200 text-lg'>I consider myself detail-oriented and dedicated when undertaking each project.</p>
    </div> );
}

export default Info;
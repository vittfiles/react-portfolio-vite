import React from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';

function Info() {
    return ( <div className='sm:pl-4 text-left font-medium'>
        <header className='pb-4 flex flex-col sm:flex-row justify-between'>
            <div className='pt-6 sm:pt-0'>
                <p className='text-black-300 text-2xl font-semibold'>Matias Martinez</p>
                <p className='text-black-200 text-lg'>Front-end developer</p>
            </div>
            <div className='pt-4 sm:pt-0'>
                <p className='text-black-300 text-lg flex items-center'><span className='pr-1 text-2xl'><HiMail /></span>billi@example.com</p>
                <p className='text-black-300 text-lg flex items-center'><span className='pr-1 text-2xl'><HiPhone /></span>(+503) 123 456 789</p>
            </div>
        </header>
        <p className='text-black-200 text-lg'>Self-motivated feveloper, who is willing to learn and create outstanding UI applications.</p>
        <p className='text-black-200 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas laboriosam aperia</p>
    </div> );
}

export default Info;
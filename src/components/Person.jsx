import React from 'react';
import Info from './Info';

function Person() {
    return ( <section className='flex flex-col sm:flex-row p-4 bg-white col-start-1 col-span-5 rounded-lg'>
        <img className='max-w-[250px] md:max-w-full m-auto sm:w-1/4 aspect-square object-cover object-top rounded-lg' src='profile_logo.jpg'/>
        <Info />
    </section> );
}

export default Person;
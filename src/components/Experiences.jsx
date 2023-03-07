import React from 'react';
import Experience from './Experience';

function Experiences() {
    return ( <section className='text-start p-4 bg-white sm:col-start-3 col-span-5 sm:col-span-3 rounded-lg'>
        <h2 className='pb-2 font-medium text-2xl text-black-300'>Experiences</h2>
        <Experience title='Front-end developer' date='Feb 2017 - Current' img='gaming.webp' info='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' />
        <Experience title='Front-end developer' date='Feb 2017 - Current' img='gaming.webp' info='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' />
    </section>);
}

export default Experiences;
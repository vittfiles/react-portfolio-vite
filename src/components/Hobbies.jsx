import React from 'react';
import Hobbie from './Hobbie';

function Hobbies() {
    return ( 
        <aside className='text-start p-4 bg-white col-start-1 col-span-5 sm:col-span-2 row-span-2 rounded-lg'>
            <h2 className='pb-2 font-medium text-2xl text-black-300'>Hobbies</h2>
            <Hobbie title='gaming' img='gaming.webp' info='Quisque feugiat malesuada molestie.'/>
            <Hobbie title='cooking' img='cooking.webp' info='Quisque feugiat malesuada molestie.'/>
            <Hobbie title='biking' img='bike.webp' info='Quisque feugiat malesuada molestie.'/>
        </aside>
     );
}

export default Hobbies;
import React from 'react';

function Hobbie({title,info,img,}) {
    return ( <article className='py-4'>
        <img className='rounded-lg' src={img}/>
        <h2 className='pt-4 pb-2 text-black-400 font-semibold text-lg'>{title}</h2>
        <h3 className='text-black-200 font-medium text-base'>{info}</h3>
    </article> );
}

export default Hobbie;
import React from 'react';

function Experience({date,title,info,img}) {
    return ( <article className='py-4 flex items-start'>
    <img className='rounded-lg w-1/4 aspect-square object-cover' src={img}/>
    <div className='pl-4'>
        <h3 className='text-black-200 font-medium text-sm'>{date}</h3>
        <h2 className='py-4 pb-2 text-black-400 font-semibold text-base'>{title}</h2>
        <p className='py-4 text-black-200 font-medium text-base'>{info}</p>
    </div>
</article> );
}

export default Experience;
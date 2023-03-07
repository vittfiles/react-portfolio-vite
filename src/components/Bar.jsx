import React from 'react';

function Bar({id, title, value}) {
    return ( <li className='flex items-center py-1'>
        <span className='w-1/2 text-base font-medium text-300'>{title}</span>
        <div id={id} className={'w-1/2 h-3 border-2 rounded-full'} value={value}>
            <div className={'w-0 h-2 rounded-full bg-blues transition transition-all ease-in-out duration-1000'}></div>
        </div>
    </li> );
}

export default Bar;
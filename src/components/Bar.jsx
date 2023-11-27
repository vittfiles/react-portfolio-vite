import React from 'react';

function Bar({id, title, value}) {
    return ( <li className='flex items-center justify-between py-1'>
        <span className='w-1/2 text-base font-medium text-300'>{title}</span>
        {/* <div id={id} className={'w-1/2 h-3 border-2 rounded-full'} value={value}>
            <div className={'w-0 h-2 rounded-full bg-blues transition transition-all ease-in-out duration-1000'}></div>
        </div> */}
        <svg id={id} xmlns="http://www.w3.org/2000/svg" width="22" height="20" className="check-svg">
            <g fill="none" fillRule="evenodd" stroke="#2F80ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                <path className="check" d="m7 9 3 3L21 1"></path>
                <path className="box" d="M19 10v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11"></path>
                <path className="box2" strokeWidth="4" stroke="#fff"  d="M19 10v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11"></path>
            </g>
        </svg>
    </li> );
}

export default Bar;
import React, {  useEffect } from 'react';

function Check({id, title, value}) {
    useEffect(() => {
        activarAnimacion()
        window.addEventListener('scroll', function() {
            activarAnimacion();
        });
        function activarAnimacion(){
            let bar = document.getElementById(id);
            var htmlPos = bar.getBoundingClientRect();
            if(htmlPos.top >= 0 && htmlPos.bottom <= window.innerHeight) {
                bar?.classList?.add("animate");
            }
        }
    }, []);

    return ( <li className='flex items-center justify-between py-1'>
        <span className='w-1/2 text-base font-medium text-300'>{title}</span>
        <svg id={id} xmlns="http://www.w3.org/2000/svg" width="22" height="20" className="check-svg">
            <g fill="none" fillRule="evenodd" stroke="#2F80ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                <path className="check" d="m7 9 3 3L21 1"></path>
                <path className="box" d="M19 10v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11"></path>
            </g>
        </svg>
    </li> );
}

export default Check;
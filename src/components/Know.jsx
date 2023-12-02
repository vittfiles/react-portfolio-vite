import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Check from './Check';


function Know({title, list}) {
    /* useEffect(() => {
        list.forEach(el => activarAnimacion(el));
        window.addEventListener('scroll', function() {
            list.forEach(el => activarAnimacion(el));
        });
        function activarAnimacion(el){
            let bar =document.getElementById(el.id);
            var htmlPos = bar.getBoundingClientRect();
            if(htmlPos.top >= 0 && htmlPos.bottom <= window.innerHeight) {
                bar.querySelector("div").classList.add(el.value);
            }
        }
    }, []); */
    return ( <section className='text-start p-4 bg-white col-start-1 col-span-5 sm:col-span-2 rounded-lg'>
        <h2 className='text-lg font-bold text-300'>{title}</h2>
        <ul>
            {list.map(bar => <Check id={bar.id} title={bar.title} value={bar.value} key={bar.id}/>)}
            {/* {list.map(bar => <Bar id={bar.id} title={bar.title} value={bar.value} key={bar.id}/>)} */}
        </ul>
    </section> );
}

export default Know;
import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const list = [
    {id:"bar-react",title: "React",value: "w-4/5"},
    {id:"bar-css",title: "CSS",value: "w-11/12"},
    {id:"bar-javascript",title: "Javascript",value: "w-11/12"},
    {id:"bar-vue",title: "Vue",value: "w-0"},
    {id:"bar-reactnative",title: "React Native",value: "w-0"},
    {id:"bar-redux",title: "Redux",value: "w-1/2"},
];

function Know({title}) {
    useEffect(() => {
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
    }, []);
    return ( <section className='text-start p-4 bg-white col-start-1 col-span-5 sm:col-span-2 rounded-lg'>
        <h2 className='text-lg font-bold text-300'>{title}</h2>
        <ul>
            {list.map(bar => <Bar id={bar.id} title={bar.title} value={bar.value} key={bar.id}/>)}
        </ul>
    </section> );
}

export default Know;
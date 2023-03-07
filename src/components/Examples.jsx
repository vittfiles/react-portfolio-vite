import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useParams  } from 'react-router-dom';
import ExampleCard from './ExampleCard';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';

const proj = [
    {
        id: 'responsive',
        title: 'Responsive',
        ej: [
            {
                title: 'Recipe Blog',
                img: 'gaming.webp',
                tags: ['HTML', 'CSS', 'responsive'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
            {
                title: 'My Gallery',
                img: 'gaming.webp',
                tags: ['HTML', 'CSS', 'responsive'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
            {
                title: 'Checkout',
                img: 'gaming.webp',
                tags: ['HTML', 'CSS', 'responsive'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
            {
                title: 'Example 4',
                img: 'gaming.webp',
                tags: ['HTML', 'CSS', 'responsive'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
        ],
        
    },
    {
        id: 'react',
        title: 'React',
        ej: [
            {
                title: 'Portfolio',
                img: 'cooking.webp',
                tags: ['HTML', 'CSS', 'Javascript', 'responsive'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
            {
                title: 'Portfolio2',
                img: 'cooking.webp',
                tags: ['HTML', 'CSS', 'Javascript'],
                info: 'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
            },
        ],
    },
];
function Examples() {
    let defClass = ' font-medium text-sm text-black-400 px-5 py-2 border-2 border-black-400 rounded-xl mr-4';
    let activeClass = defClass+' bg-blues text-white border-blues';

    const {ej} = useParams();
    
    let navigate = useNavigate();
    let location = useLocation();
    let search = location.search;
    let query = new URLSearchParams(search);
    let nav = parseInt(query.get('nav')) || 1;
    useEffect(() => {
        if(location.pathname === "/"){
            console.log(location);
            navigate('/'+proj[0].id+'?nav=1');
        }
    }, []);

    let examples = proj.filter(el => ej === el.id)[0];
    let arrays = [], size = 3;
    if(examples){
        for (let i = 0; i < examples.ej.length; i += size)
        arrays.push(examples.ej.slice(i, i + size));
    }
    const handleClick = (newNav) => navigate(location.pathname+'?nav='+newNav);

    return ( <section className='text-start col-start-1 col-span-5 flex flex-wrap'>
        <header className='text-start p-4 bg-white w-full rounded-lg'>
            <h2 className='text-black-400 font-medium text-lg pb-5'>Projects ({proj.length})</h2>
            <nav className='pb-2 flex flex-wrap'>
                {proj.map(el => {return (<NavLink className={({ isActive }) => isActive ? activeClass : defClass} to={'/'+el.id+'?nav=1'} key={el.id} >{el.title}</NavLink>)})}
            </nav>
        </header>
        {ej && arrays[nav-1].map((el,index) => <ExampleCard key={el.title} title={el.title} img={el.img} tags={el.tags} index={index} info={el.info}/>)}
        <footer className='text-start p-4 w-full'>
            <nav className='flex justify-end'>
                {(nav > 1)&& <button className='px-2 py-2 rounded-md border-2 border-black-300 hover:border-blues hover:bg-blues group/bt' onClick={e=>handleClick(nav-1)} ><span className='text-xl text-black-300 group-hover/bt:text-white'><IoIosArrowBack /></span></button> }
                {nav && arrays && (arrays.length > 1) && <button className='px-4 py-1 mx-1 rounded-md border-2 border-blues bg-blues text-white' >{nav}</button>}
                {((arrays )&& (arrays.length > nav)) && <button className='px-2 py-2 rounded-md border-2 border-black-300 hover:border-blues hover:bg-blues group/bt' onClick={e=>handleClick(nav+1)} ><span className='text-xl text-black-300 group-hover/bt:text-white'><IoIosArrowForward /></span></button> }
            </nav>
        </footer>
    </section> );
}

export default Examples;
import React from 'react';

function Blog() {
    return ( <article className='flex flex-col bg-white py-4 pl-4 col-span-5 sm:col-span-3 row-span-2 rounded-lg text-left overflow-hidden'>
        <h2 className='text-black-100 text-base font-medium'>Blog</h2>
        <div className='flex justify-between'>
            <h3 className='font-medium text-2xl text-black-400 w-1/3 pt-4'>How to organize your css</h3>
            <img className='w-2/3 rounded-l-lg ml-4' src='blog.webp' />
        </div>
        <p className='py-4 pr-10 text-black-200 font-medium text-base'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi</p>
        <p className='py-4 pr-10 text-black-200 font-medium text-base'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        <p className='mt-auto pt-10 pb-2 pr-10 text-blues font-medium text-base'>dev.to</p>
    </article> );
}

export default Blog;
import React from 'react';

function Blog() {
    return ( <article className='flex flex-col bg-white py-4 pl-4 col-span-5 sm:col-span-3 row-span-2 rounded-lg text-left overflow-hidden'>
        <h2 className='text-black-100 text-base font-medium'>Last proyect</h2>
        <div className='flex justify-between'>
            <h3 className='font-medium text-2xl text-black-400 w-1/3 pt-4'>Angular social network</h3>
            <img className='w-2/3 rounded-l-lg ml-4' src='img/social-network.jpeg' />
        </div>
        <p className='py-4 pr-10 text-black-200 font-medium text-base'>You can access this project with a fake email and password. You can also upload images and comment.</p>
        <p className='py-4 pr-10 text-black-200 font-medium text-base'>The website doesn't send any image or data to any server, it simulate the connection with an api using <a className='text-blues underline' target="_blank" href="https://github.com/angular/in-memory-web-api">In memory web api</a>.</p>
        
        <div className='py-4 mt-auto'>
            <a target="_blank" rel="noreferrer noopener" href="https://vittfiles.github.io/angular-social-network/" className='font-medium text-lg text-white px-7 py-1 border-2 border-blues rounded-xl bg-blues mr-2 hover:text-blues hover:bg-white'>Demo</a>
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/vittfiles/angular-social-network/" className='font-medium text-lg text-blues px-6 py-1 border-2 border-blues rounded-xl hover:text-white hover:bg-blues'>Code</a>
        </div>
    </article> );
}

export default Blog;
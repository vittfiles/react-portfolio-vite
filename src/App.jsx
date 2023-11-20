import { useState } from 'react'
import Person from './components/Person'
import Know from './components/Know'
import Blog from './components/Blog'
import Hobbies from './components/Hobbies'
import Experiences from './components/Experiences'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  const list1 = [
    {id:"bar-angular",title: "Angular",value: "w-4/5"},
    {id:"bar-css",title: "CSS",value: "w-11/12"},
    {id:"bar-html",title: "Html",value: "w-11/12"},
    {id:"bar-javascript",title: "Javascript",value: "w-11/12"},
    {id:"bar-react",title: "React",value: "w-4/5"},
    {id:"bar-redux",title: "Redux",value: "w-1/2"},
    {id:"bar-typescript",title: "Typescript",value: "w-9/12"},
];
const list2 = [
  {id:"bar-git",title: "Git",value: "w-9/12"},
  {id:"bar-express",title: "Express",value: "w-11/12"},
  {id:"bar-wordpress",title: "Wordpress",value: "w-9/12"},
  {id:"bar-php",title: "PHP",value: "w-4/6"},
  {id:"bar-sql",title: "SQL",value: "w-4/6"},
  {id:"bar-mongodb",title: "MongoDB",value: "w-3/6"},
];

  return (
    <div className="container max-w-4xl mx-auto grid grid-cols-5 gap-6 py-4 px-4 lg:px-0">
      <Person />
      <Know list={list1} title='FRONT END'/>
      <Blog />
      <Know list={list2} title='OTHER KNOWLEDGE'/>
     {/*  <Hobbies /> */}
      {/* <Experiences /> */}
      <Outlet />
    </div>
  )
}

export default App

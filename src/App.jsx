import { useState } from 'react'
import Person from './components/Person'
import Know from './components/Know'
import Blog from './components/Blog'
import Hobbies from './components/Hobbies'
import Experiences from './components/Experiences'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container max-w-4xl mx-auto grid grid-cols-5 gap-6 py-4 px-4 lg:px-0">
      <Person />
      <Know title='FRONT END'/>
      <Blog />
      <Hobbies />
      <Experiences />
      <Outlet />
    </div>
  )
}

export default App

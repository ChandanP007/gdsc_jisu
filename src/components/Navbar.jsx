import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'


function Navbar() {

  const [theme , setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.body.classList.toggle('dark')
  }


  return (
    <>
      <div id="navbar" className='flex flex-row justify-between p-5 shadow-xl  dark:shadow-slate-50  sticky top-0 px-24 dark:bg-black dark:text-white'>
        <div className="logo">
          <Link to='/'>
            <span >
                <span className='text-green-600 font-mono font-semibold text-3xl'>G</span>
                <span className='text-red-600 font-mono font-semibold text-3xl'>D</span>
                <span className='text-yellow-600 font-mono font-semibold text-3xl'>S</span>
                <span className='text-blue-600 font-mono font-semibold text-3xl dark:text-blue-400'>C </span>
                <span className='text-black  font-mono font-semibold text-3xl hover:underline underline-offset-4 decoration-green-500 dark:text-white'>JIS University</span>
            </span>
            </Link>
        </div>
        <div className="links">
          <ul className='flex flex-row justify-end p-2'>
            <li><a href="#" ><Link to={'/'}            className="nav-list   hover:font-semibold decoration-red-600 " >Home</Link></a></li>
            <li><a href="#" ><Link to={'/events'} className="nav-list   hover:font-semibold decoration-red-600 ">Events</Link></a></li>
            <li><a href="#" ><Link to={'/timeline'} className="nav-list  hover:font-semibold decoration-red-600 ">Timeline</Link></a></li>
            <li><a href="#" ><Link to={'/projects'} className="nav-list   hover:font-semibold decoration-red-600" >Projects</Link></a></li>
            <li><a href="#" ><Link to={'/team'} className="nav-list  hover:font-semibold decoration-red-600" >Teams</Link></a></li>
            <li><a href="#" ><Link to={'/contact'} className="nav-list   hover:font-semibold decoration-red-600" >Join Us</Link></a></li>
            {/* Light Switch  */}
            <label className="switch " >
              <input type="checkbox"/>
              <span className="slider round shadow-md shadow-slate-600 dark:border-cyan-300 border-opacity-100 rounded border-2" onClick={toggleTheme}></span>
            </label>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
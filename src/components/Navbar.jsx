import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Brightness1Icon from '@mui/icons-material/Brightness1';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

  const [theme, setTheme] = useState('light')


  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.body.classList.toggle('dark')
  }

  useEffect(() => {
    // get the current time and set it to a variable
    const currentTime = new Date().getHours()
    // if the time is between 6pm and 6am, set the theme to dark
    if (currentTime >= 18 || currentTime <= 6) {
      toggleTheme()
      document.body.classList.add('dark')
      setOpen(!open)
      // add checked attribute to checkbox
      document.getElementById('checkbox').setAttribute('checked', '')


    } else {
      setTheme('light')
      document.body.classList.remove('dark')
      setOpen(!open)
      document.getElementById('checkbox').removeAttribute('checked', '')
    }
  }, [])


  const toogleMenu = (e) => {
    const menu = document.querySelector('#menu-list')
    menu.classList.toggle('hidden')
    setOpen(!open)
  }

  return (
    <>
      <div className='lg:flex   flex-row justify-between  lg:items-center lg:justify-between p-5  shadow-black shadow-sm bg-white bg-opacity-90  dark:shadow-slate-50  sticky top-0  dark:bg-bg-dark dark:text-white z-50'>
        <div className="flex flex-row justify-between">
          <div className='inline '>
            <Link to='/'>
              <span >
                <span className='text-green-600 font-mono font-semibold text-4xl'>G</span>
                <span className='text-red-600 font-mono font-semibold text-4xl'>D</span>
                <span className='text-yellow-600 font-mono font-semibold text-4xl'>S</span>
                <span className='text-blue-600 font-mono font-semibold text-4xl dark:text-blue-400'>C </span>
                <span className='text-black  font-mono font-semibold text-4xl hover:underline underline-offset-4 decoration-green-500 dark:text-white'>JISU</span>
              </span>
            </Link>
          </div>

          <div className="">
            <span className=' lg:hidden text-3xl'>
              {open ? <CloseIcon onClick={toogleMenu} className='cursor-pointer menu-options' /> : <SegmentIcon onClick={toogleMenu} className='cursor-pointer menu-options text-6xl' />}
            </span>
          </div>

        </div>

        <div className="links dark:bg-bg-dark  lg:flex flex-row hidden" id="menu-list">
          <ul className='lg:flex lg:flex-row lg:justify-end lg:opacity-100 opacity-100 text-center flex-col   p-10 gap-6 sm:flex   lg:py-0  lg:pl-0 '>
            <li><a href="#" ><Link to={'/'} className="nav-list   hover:font-semibold " >Home</Link></a></li>
            <li><a href="#" ><Link to={'/events'} className="nav-list   hover:font-semibold ">Events</Link></a></li>
            <li><a href="#" ><Link to={'/timeline'} className="nav-list  hover:font-semibold   ">Timeline</Link></a></li>
            <li><a href="#" ><Link to={'/projects'} className="nav-list   hover:font-semibold " >Projects</Link></a></li>
            <li><a href="#" ><Link to={'/team'} className="nav-list  hover:font-semibold " >Teams</Link></a></li>
            <li><a href="#" ><Link to={'/contact'} className="nav-list   hover:font-semibold " >Join Us</Link></a></li>
            {/* Light Switch  */}
            <label className="switch " >
              <input type="checkbox" id='checkbox' />
              <span className="slider round shadow-md shadow-slate-600 dark:border-cyan-300 border-opacity-100 rounded border-2" onClick={toggleTheme}></span>
            </label>
            <span className='pl-2'>{theme === 'light' ? <Brightness5Icon /> : <Brightness2Icon />}</span>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar
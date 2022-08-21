import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {

  return (
    <>
      <div id="navbar" className='flex flex-row justify-between p-5 shadow-xl px-24'>
        <div className="logo">
          <Link to='/'>
            <span>
                <span className='text-green-600 font-mono font-semibold text-3xl'>G</span>
                <span className='text-red-600 font-mono font-semibold text-3xl'>D</span>
                <span className='text-yellow-600 font-mono font-semibold text-3xl'>S</span>
                <span className='text-blue-600 font-mono font-semibold text-3xl'>C </span>
                <span className='text-black  font-mono font-semibold text-3xl hover:underline underline-offset-4 decoration-green-500'>JIS University</span>
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
              <span className="slider round shadow-md shadow-slate-600"></span>
            </label>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
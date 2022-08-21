import React from 'react'
import { Link } from 'react-router-dom'
import GDSC_LOGO from '../assets/jisu_gdsc.png'

function Footer() {
  return (
    <div className=' bg-slate-400 dark:bg-bg-dark '>
      <div className='grid  grid-cols-3  gap-4 text-black  p-5 place-items-center'>



        <div className='sm:col-span-1 col-span-3'>
            <img src={GDSC_LOGO} alt='Google developer Student Club' className='h-[90px]' />
            <span className='text-black dark:text-white font-mono font-medium'>Google Developer Student Club <br /> JIS University</span>
            <div  className='mt-5'>
                <ul>
                <li><a href="#" ><Link to={'/'}            className="   font-mono font-light cursor-default hover:text-slate-900 dark:text-white  hover:font-semibold decoration-red-600 " >Home</Link></a></li>
                <li><a href="#" ><Link to={'/events'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Events</Link></a></li>
                <li><a href="#" ><Link to={'/timeline'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Timeline</Link></a></li>
                <li><a href="#" ><Link to={'/projects'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Projects</Link></a></li>
                <li><a href="#" ><Link to={'/team'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Teams</Link></a></li>
                <li><a href="#" ><Link to={'/contact'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white    hover:font-semibold decoration-red-600" >Join Us</Link></a></li>
                </ul>
             </div>
        </div>


        <div className='sm:col-span-1 col-span-3'>
            <span className='text-black dark:text-white font-mono font-medium'>Contact Us</span>
            <div className='mt-5'>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
             </div>
        </div>
        <div className='sm:col-span-1 col-span-3'>🤣🤣🤣🤣</div>
      </div>
    </div>
  )
}

export default Footer

/*
<div className=' p-5'>
          <div className=' p-2 '>
            <img src={GDSC_LOGO} alt='Google developer Student Club' className='h-[90px]' />
            <span className='text-black dark:text-white font-mono font-medium'>Google Developer Student Club <br /> JIS University</span>
            </div>
            <div  className='mt-5 pl-2'>
                <ul>
                <li><a href="#" ><Link to={'/'}            className="   font-mono font-light cursor-default hover:text-slate-900 dark:text-white  hover:font-semibold decoration-red-600 " >Home</Link></a></li>
                <li><a href="#" ><Link to={'/events'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Events</Link></a></li>
                <li><a href="#" ><Link to={'/timeline'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Timeline</Link></a></li>
                <li><a href="#" ><Link to={'/projects'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Projects</Link></a></li>
                <li><a href="#" ><Link to={'/team'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Teams</Link></a></li>
                <li><a href="#" ><Link to={'/contact'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white    hover:font-semibold decoration-red-600" >Join Us</Link></a></li>
                </ul>
            </div>

            */
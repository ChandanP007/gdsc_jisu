import React from 'react'
import { Link } from 'react-router-dom'
import GDSC_LOGO from '../assets/jisu_gdsc.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

// import FooterAnimation from '../assets/animation_gdsc.webp'


function Footer() {
  return (
    <div className=' bg-orange-200 dark:bg-bg-dark '>

      <div className="footer">
        <div className='grid  grid-cols-3  lg:gap-2 gap-4 text-black  p-10 text-start  lg:place-items-center  '>



          <div className='sm:col-span-1 col-span-3'>
            <img src={GDSC_LOGO} alt='Google developer Student Club' className='h-[90px]' />
            <span className='text-black dark:text-white font-mono font-medium'>Google Developer Student Club <br /> JIS University</span>
            <div className='mt-5'>
              <ul>
                <li><a href="#" ><Link to={'/'} className="   font-mono font-light cursor-default hover:text-slate-900 dark:text-white  hover:font-semibold decoration-red-600 " >Home</Link></a></li>
                <li><a href="#" ><Link to={'/events'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Events</Link></a></li>
                <li><a href="#" ><Link to={'/timeline'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600 ">Timeline</Link></a></li>
                <li><a href="#" ><Link to={'/projects'} className="  font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Projects</Link></a></li>
                <li><a href="#" ><Link to={'/team'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white   hover:font-semibold decoration-red-600" >Teams</Link></a></li>
                <li><a href="#" ><Link to={'/contact'} className=" font-mono font-light cursor-default hover:text-slate-900 dark:text-white    hover:font-semibold decoration-red-600" >Join Us</Link></a></li>
              </ul>
            </div>
          </div>


          <div className='sm:col-span-1 col-span-3'>
            <span className='text-black dark:text-white font-mono font-bold text-xl underline underline-offset-4'>Contact Us</span>
            <div className='mt-5'>
              <ul className='dark:text-white text-black font-mono font-medium'>
                <li> <a href="https://www.facebook.com/groups/gdscjisu"><FacebookIcon className='dark:text-white m-2' />@gdscjisu</a></li>
                <li> <a href="https://www.instagram.com/gdsc_jisu/"><InstagramIcon className='dark:text-white m-2' />@gdsc_jisu</a></li>
                <li>  <a href="https://twitter.com/gdsc_jisu"><TwitterIcon className='dark:text-white m-2' /></a>@gdsc_jisu</li>
                <li>  <a href="https://github.com/gdsc-jisu"><GitHubIcon className='dark:text-white m-2' />@gdsc-jisu</a></li>
                <li> <a href="https://www.linkedin.com/company/gdsc-jisu"><LinkedInIcon className='dark:text-white m-2' />@gdsc-jisu</a></li>
                <li>  <a href="https://www.youtube.com/"><YouTubeIcon className='dark:text-white m-2' /></a>@404NotFound</li>
              </ul>
            </div>
          </div>



          <div className='sm:col-span-1 col-span-3'>
            <span className='text-black dark:text-white font-mono font-bold text-xl underline underline-offset-4'>Resources</span>
            <div className='mt-5'>
              <ul className='dark:text-white text-black font-mono font-medium'>
                <li> <a href="https://www.facebook.com/groups/gdscjisu"><InsertDriveFileIcon className='dark:text-white m-2' />CheatSheets</a></li>
                <li> <a href="https://www.instagram.com/gdsc_jisu/"><RssFeedIcon className='dark:text-white m-2' />Blogs</a></li>
                <li>  <a href="https://twitter.com/gdsc_jisu"><PlayCircleIcon className='dark:text-white m-2' /></a>Videos</li>
                <li>  <a href="https://twitter.com/gdsc_jisu"><FollowTheSignsIcon className='dark:text-white m-2' /></a>RoadMaps</li>
              </ul>
            </div>
          </div>

        </div>
        <div className='grid  grid-cols-2  lg:gap-2 gap-4 text-black  p-10 lg:place-items-center'>
          <div className='sm:col-span-1 col-span-2'>
            <span className='text-black dark:text-white font-mono font-medium'>© 2022 Google Developer Student Club JIS University</span>
          </div>
          <div className='sm:col-span-1 col-span-2'>
            <span className='text-black dark:text-white font-mono font-medium'>Made with ❤️ By Abhishek & Chandan</span>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Footer
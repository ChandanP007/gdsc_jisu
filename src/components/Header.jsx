import React from 'react'
import GDSC_Branding from '../images/gdsc-branding.png'

function Header() {
  return (
    <div className=' mx-auto  dark:bg-bg-dark dark:text-white'>
      <div className="container   p-10 mx-auto">

        <div>
          <div className="mx-auto h-44">
            <img src={GDSC_Branding} alt="branding" className='mx-auto pb-6 h-full' />
          </div>

          <div className=" text-clip lg:px-16 px-2">
            <p className='font-mono font-medium text-lg'>The Google Developer's Student Club, <span className='community'>JIS UNIVERSITY</span> , 💐 welcomes all of you wholeheartedly. We Welcome students to grow and learn together.
              We at JIS University build a <span className='underline font-extrabold font-mono decoration-solid decoration-cyan-300 underline-offset-2'>peer-to-peer</span>  learning process making a better environment for students to learn and develop.
              This year our Club is aiming to organize resourceful <span className='underline  font-extrabold font-mono  decoration-solid decoration-violet-600 underline-offset-4'>BootCamps</span> and Interesting Workshops. The major idea is to learn new skills through hands-on workshops and create innovative projects which will help in the betterment of our <span className='underline  font-extrabold font-mono  decoration-solid decoration-yellow-300 underline-offset-2'>Society</span>.</p>

          </div>
        </div>

        {/* Side logo here */}
        <div className='side-logo'>

        </div>
      </div>
    </div>
  )
}

export default Header
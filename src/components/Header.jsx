import React from 'react'

function Header() {
  return (
    <div className='header-section mx-auto bg  dark:bg-bg-dark dark:text-white'>
      <div className="container   m-5 p-10 mx-auto">

        <div>
          <div className="branding-img">

          </div>
          <h1 className='text-5xl font-bold  text-black  dark:bg-bg-dark dark:text-white font-mono'>
            Google Developer Student Club
          </h1>
          <div className=" text-center">
          <p className='font-serif font-medium text-lg'>The Google Developer's Student Club, JIS UNIVERSITY, 💐 welcomes all of you wholeheartedly. We Welcome students to grow and learn together.

            We at JIS University build a <span className='underline decoration-solid decoration-cyan-300 underline-offset-2'>peer-to-peer</span>  learning process making a better environment for students to learn and develop.

            This year our Club is aiming to organize resourceful <span className='underline decoration-solid decoration-violet-600 underline-offset-4'>BootCamps</span> and Interesting Workshops. The major idea is to learn new skills through hands-on workshops and create innovative projects which will help in the betterment of our <span className='underline decoration-solid decoration-yellow-300 underline-offset-2'>Society</span>.</p>

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
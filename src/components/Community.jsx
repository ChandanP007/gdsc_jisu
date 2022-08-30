import React from 'react'

import CommunityPartner from './../data/partner.json'
// import Slider from "react-slick";
function Community() {
  return (
    <div className='lg:p-20 sm:p-2 bg-white flex  flex-col text-center dark:bg-[#182232] py-10'>
        <h1 className='lg:text-6xl text-2xl dark:text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Community</span> Partner</h1>
        <p className='dark:text-white font-extrabold font-mono pt-5'>
            Thanks to our community partners, who helped us  provide a better experience to our students.
        </p>
        <div className='grid grid-flow-col   justify-center   gap-5 p-10'>
        {/* <Slider {...settings}> */}
            {
                CommunityPartner.map((partner, index) => {
                    return (
                        <div className='bg-slate-600 rounded-lg p-10  hover:scale-105 transition-all duration-1000' key={partner.id}>
                            <img src={partner.image} alt={partner.name} className='rounded-xl  h-20 hover:scale-150 transition-all duration-1000' />
                        </div>
                    )
                }
                )

            }
        {/* </Slider> */}

            </div>
    </div>
  )
}

export default Community
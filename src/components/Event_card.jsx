import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Event_card(event) {
  return (
    <div className='flex lg:flex-row sm:flex-col  justify-between  bg-white  rounded-xl shadow-lg dark:shadow-slate-300 dark:shadow-md' key={event.event.id}>
                  <div className={`rounded-lg ${event.event.completed? "pt-16" : "pt-10" }`}>
                    <img src={event.event.image} className="max-h-56  rounded-lg border-dark-purple border-r-2" />
                  </div>
                  <div className='flex flex-col p-5'>
                    <div className="flex gap-4 justify-between">
                    <p className=' font-mono text-black text-xs rounded-md   p-2'>{event.event.type}</p>
                    <p className={`font-mono text-black text-xs rounded-md   p-2 ${event.event.isActive? "bg-green-400": "bg-red-400"} `}>{event.event.isActive? "Starting Soon": "Ended"}</p>
                    </div>
                    <div>
                    <h1 className='font-mono text-black text-lg  '>{event.event.name}</h1>

                    </div>

                    <div className='flex flex-row  gap-2 bg-yellow-200 p-2 rounded-lg mt-2 text-center items-center'>
                      <p className='font-mono text-black text-sm font-extrabold'>{event.event.date}</p>
                      <p className='font-mono text-black text-sm font-extrabold'>{event.event.time}</p>
                    </div>

                    <div className='flex flex-row mt-2'>
                      <p className='font-mono text-black text-sm cursor-pointer '>
                      <a href={event.event.location.url} className="font-mono"><LocationOnIcon />{event.event.location.name}</a></p>
                    </div>

                    <div className=' p-5 rounded-sm flex flex-col text-center gap-5'>
                      <a href={event.event.link}>

                      {event.event.completed? <p className='font-mono text-black text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-500 hover:text-white'>Check out what happened</p>: (
                        <>
                        <p className='font-mono text-black text-sm bg-slate-100 rounded-lg p-2 hover:bg-slate-500 hover:text-white'>Know More</p>
                        </>
                      )}
                      </a>
                    </div>

                  </div>
                </div>
  )
}

export default Event_card
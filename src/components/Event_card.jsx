import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

function Event_card(event) {
  return (
    <div className="lg:mx-2 mx-6 reveal" title={event.event.description}>
      <div className='flex  flex-col lg:flex-row justify-around bg-white h-full rounded-xl shadow-lg dark:shadow-slate-300 dark:shadow-md' key={event.event.id}>
        <div className='rounded-lg mx-auto  my-auto'>
          <img src={event.event.image} className=" w-36  rounded-lg" />
        </div>
        <div className='flex flex-col px-5 pt-2'>
          <div className="flex gap-4 justify-between">
            <p className=' font-mono text-black text-xs rounded-md   p-2'>{event.event.type}</p>
            <p className={`font-mono text-black text-xs rounded-md   p-2 ${event.event.isactive ? "bg-green-400" : "bg-red-400"} `}>{event.event.isactive ? "Starting Soon" : "Ended"}</p>
          </div>
          <div>
            <h1 className='font-mono text-black text-lg  '>{event.event.name}</h1>

          </div>

          <div className='flex flex-row  gap-2 bg-yellow-200 p-2 rounded-lg mt-2 text-center items-center justify-center'>
            <p className='font-mono text-black text-sm font-extrabold'>{event.event.date ? moment.utc(`${event.event.date}`).format('MMM Do,YYYY') : "Dates not Decalred"}</p>
            {/* <p className='font-mono text-black text-sm font-extrabold'>{event.event.time}</p> */}
          </div>

          <div className='flex flex-row mt-2'>
            <p className='font-mono text-black text-sm cursor-pointer '>
              <a href={event.event.location_url} className="font-mono"><LocationOnIcon />{event.event.location_name}</a></p>
          </div>

          <div className=' p-5 rounded-sm flex flex-col text-center gap-5'>
            <a href={event.event.link}>

              {event.event.completed ? <p className='font-mono text-black text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-500 hover:text-white'>Check out what happened</p> : (
                <>
                  <p className='font-mono text-black text-sm bg-slate-100 rounded-lg p-2 hover:bg-slate-500 hover:text-white'>{event.event.link ? "Know More" : "Coming Soon"}</p>
                </>
              )}
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Event_card
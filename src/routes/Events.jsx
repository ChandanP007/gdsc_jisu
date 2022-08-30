import React, { lazy , Suspense} from 'react'
import EventData from '../data/events.json'
import Loading from '../components/Loading';
// import Event_card from './Event_card';
const Event_card = lazy(() => import('../components/Event_card'));

function Events() {


  return (
    <Suspense fallback={<Loading/>}>

    
    <div className=' py-20 bg-slate-300 dark:bg-[#0E1525]'>
      <div className="sm:px-2 lg:px-10 mb-2">
        <h1 className='font-mono font-extrabold dark:text-white text-black lg:text-4xl underline underline-offset-8 decoration-yellow-400  '>Events</h1>
      </div>
      <div className='sm:px-20 lg:px-20 mb-2'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>


          {EventData.map((event) => {
              return <Event_card event={event} />
          })}


        </div>
      </div>
    </div>
    </Suspense>
  )
}

export default Events
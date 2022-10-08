import React, { lazy, Suspense, useState, useEffect } from 'react'
// import EventData from '../data/events.json'
import Badge from '@mui/material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Loading from './Loading';
// import Event_card from './Event_card';
const Event_card = lazy(() => import('./Event_card'))

function Events() {

  const [loading, setLoading] = useState();
  const [Events, setEvents] = useState([]);
  const [ActiveEvents, setActiveEvents] = useState([]);

  // fetch data from url
  useEffect(() => {
    setLoading(true);
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=h9xSCQkw20z1Hof7BHnb53oh62qL8BTnB00q1uMIPuadlO7ID0e5ZQNKSDCPtiwOBEBwG9BTP-CTnikj42NR6YaoiytHjl26m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCjcY7AlP5NJRAXmIz1deYpGqqRS8Gzfp0TDcvW7v1BH-MPRzg83JluUT3gZpfj8-m1P2eA5Zw-dYxlXVBm-l_7N4TmVVkG_Ltz9Jw9Md8uu&lib=MfNGTPEdViWry00pYnDxJU2odFU99YuIM')
      .then(response => response.json()).then(event => {
        setEvents(event.data);
        setActiveEvents(event.data.filter((event) => event.isactive === true));
        setLoading(false);
      }).catch(error => {
        console.log(error);
      }
      );
  }, [])


  return (
    <Suspense fallback={<Loading />}>


      <div className=' py-20 bg-slate-300 dark:bg-[#0E1525]'>
        <div className="sm:px-2 lg:px-10 mb-2">
          <h1 className='font-mono font-extrabold dark:text-white md:text-center lg:text-start text-black text-3xl underline underline-offset-8 decoration-yellow-400  '>UpComing Events</h1>
        </div>
        <div className='sm:px-20 lg:px-20 mb-2'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>
            {ActiveEvents ? ActiveEvents.map((event) => (
              <Event_card key={event.id} event={event} />
            )) : (
              <div className='text-center'>
                <h1 className='text-2xl font-bold'>No Events</h1>
              </div>

            )}
          </div>
        </div>
        <div className="mt-36">
          <div className="sm:px-2 lg:px-10 mb-2 mt-10">
            <h1 className='font-mono font-extrabold dark:text-white text-center text-black text-3xl underline underline-offset-8 decoration-red-400 '>Past Events</h1>
          </div>
          <div className='sm:px-20 lg:px-20 mb-2'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>


              {Events.map((event) => {
                if (!event.isactive) {
                  return <Event_card event={event} key={event.id} />
                }
              })}


            </div>
          </div>

        </div>

        {/* <div className="mt-36">
          <div className="sm:px-2 lg:px-10 mb-2 mt-10 ">
            <h1 className='font-mono font-extrabold dark:text-white text-center text-black text-3xl underline underline-offset-8 decoration-green-400  lg:text-right'>Request A Event</h1>
          </div>
          <div className='sm:px-20 lg:px-20 my-2 flex lg:flex-row  sm:flex-col gap-5 pt-20 justify-evenly'>
            <div className='h-[100%] '>
              <img src="https://media3.giphy.com/media/COOguXdgZ4hyyTI0Uf/giphy.gif?cid=ecf05e47xh7t8wekprhn4mdcx2fj69yzf9r8z2a8g2bqd53r&rid=giphy.gif&ct=s" alt="space" />
            </div>
            <div className='h-[500px] rounded-lg '>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJnZ4-U-nNOgfH3g6YfY9iqm0U7boMMUdCl9rpNtrSXlK86w/viewform?embedded=true" outline="none" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </div> */}
      </div >
    </Suspense>
  )
}

export default Events
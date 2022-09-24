import React, { lazy, Suspense, useState, useEffect } from 'react'

const Event_card = lazy(() => import('../components/Event_card'));


function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-cyan-300"></div>
    </div>
  )
}


function Events() {

  const [loading, setLoading] = useState();
  const [Events, setEvents] = useState([]);

  // fetch data from url
  useEffect(() => {
    setLoading(true);
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=n4CW8kretcveRRNSWJScM7E9kmugNfxTYOz_PgIxE_PAAy6rbfCIZGOyoCWa1U5FHEc-SLRqOHGDvD94os3X2BTMz3x4NvPGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCjcY7AlP5NJRAXmIz1deYpGqqRS8Gzfp0TDcvW7v1BH-MPRzg83JluUT3gZpfj8-m1P2eA5Zw-dYxlXVBm-l_7N4TmVVkG_Ltz9Jw9Md8uu&lib=MfNGTPEdViWry00pYnDxJU2odFU99YuIM')
      .then(response => response.json()).then(event => {
        setEvents(event.data);
        setLoading(false);
      }).catch(error => {
        console.log(error);
      }
      );
  }, [])


  return (
    <Suspense fallback={<Loading />}>


      <div className=' py-20 bg-slate-300 dark:bg-[#0E1525] min-h-screen'>
        <div className="sm:px-2 lg:px-10 mb-2">
          <h1 className='font-mono font-extrabold text-center dark:text-white text-black text-4xl underline underline-offset-8 decoration-yellow-400  '>Events</h1>
        </div>
        <div className='sm:px-20 lg:px-20 mb-2'>
          {loading ? <Loading /> : (

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>


              {Events.map((event) => {
                return <Event_card event={event} key={event.id} />
              })}
            </div>
          )

          }


        </div>
      </div>
    </Suspense>
  )
}

export default Events
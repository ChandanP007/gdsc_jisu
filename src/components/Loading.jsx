
import { Skeleton } from "@mui/material"


import React from 'react'

function Loading() {


  return (
    <>
      <div className='p-10 flex flex-col bg-white  dark:bg-bg-dark m-10  shadow-2xl  dark:shadow-grey-400  dark:shadow-sm   justify-center rounded-xl dark:border-white  border-2'>
        <div className='flex justify-center pt-5 pb-1'>
          <Skeleton variant="circular" width={150} height={150} />
        </div>
        <div className="p-5 font-mono dark:text-white flex justify-center">
          <Skeleton variant="rectangular" width={210} height={60} />
          <div className="flex flex-row text-center justify-center gap-2 pt-4">
            <Skeleton variant="rounded" width={210} height={60} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Loading


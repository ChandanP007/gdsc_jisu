import React from 'react'

import ReactAudioPlayer from 'react-audio-player';

export default function BlogCard({ blog }) {

    // brief , title , coverImage , audioUrls , views , 
    // https://codeforcommunity.hashnode.dev/
    // slug

    return (
        <>
            <div
                onClick={
                    () => {
                        window.open(`https://abbhishek.hashnode.dev/${blog.slug}`)
                    }
                }
                className="border-2 border-black dark:border-white rounded-md p-2 m-2 cursor-pointer">
                <div className='flex flex-row gap-2'>
                    <div className='basis-1/2'>
                        <img src={blog?.coverImage} alt={blog?.title} />

                    </div>
                    <div className='text-start basis-1/2'>
                        <h1 className="text-black dark:text-white text-2xl font-mono font-bold  pb-2">{blog.title}</h1>
                        <p className="text-black dark:text-white ">{blog?.brief}</p>

                        <div className='flex flex-col gap-2 justify-center text-center'>
                            <div >
                                <p className="text-black dark:text-white ">Listen Blog In Audio</p>
                            </div>
                            <div className=' justify-center flex '>
                                <ReactAudioPlayer
                                    src={blog?.audioUrls?.male ? blog.audioUrls.male : blog.audioUrls.female}
                                    controls

                                />

                            </div>
                        </div>
                        <p className="text-black dark:text-white text-start">Views : {blog?.views}</p>


                    </div>

                </div>


            </div>

        </>
    )
}
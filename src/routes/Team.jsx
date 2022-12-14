import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../components/Loader';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar } from '@mui/material';
import Team from '../components/Team'



function Teams() {

    const [loading, setLoading] = useState();
    const [data, setData] = useState([]);

    // fetch data from url
    useEffect(() => {
        setLoading(true);
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=-_0NaYP_rAp1jq5-sgk84bP2Jx9zGG6B3008EgCvVc6i7LJq0KI0XEw9zvfPcq1_HfU62f7CdoJMSKDpbebkY92Z485mmRDOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAJsKm6W5fvg5GFSDJ7iKxeKW8GCg7FgvcDPvSDgbNPS6xQvgBeLZsqLchHuAr5RSnIJQiK8mAzHhPFHQg2xWNhZrqHMzLABhtz9Jw9Md8uu&lib=MfNGTPEdViWry00pYnDxJU2odFU99YuIM')
            .then(response => response.json()).then(user => {
                setData(user.data);
                setLoading(false);
            }).catch(error => {
                console.log(error);
            }
            );
    }, [])

    return (
        <>

            <div className=" pt-20 text-center mx-auto dark:bg-[#182232] min-h-screen">
                <h1 className='lg:text-6xl text-2xl dark:text-white font-mono Core--Team'>Core Team</h1>
                <p className='dark:text-white font-extralight font-mono pt-5'>
                    We thank all the core team members for their contribution to the project, Events and the community. Without them, this project would not have been possible.
                </p>
                <div className="lg:px-32 sm:p-5">
                    {loading ? <Loading /> : (

                        <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                            {data.map((item) => {
                                return (
                                    <div className='p-0 flex flex-col bg-white  dark:bg-slate-800 m-3  shadow-2xl  dark:shadow-grey-400  dark:shadow-lg   justify-center rounded-xl dark:border-white  border-2 dark:hover:bg-black dark:hover:shadow-lg dark:hover:shadow-teal-300 transition-all duration-200 ease-in  hover:scale-105  ' key={item.id}>
                                        <div className='flex justify-center pt-3 pb-1  rounded-md '>
                                            <Avatar src={item.image} alt={item.name} sx={{ width: 100, height: 100 }} className={`z-[0] shadow-lg border-4 border-yellow-200 relative top-7`} />
                                        </div>
                                        <div className="p-5 font-mono dark:text-white">
                                            <h1 className='text-xl text-center font-mono'>{item.name}</h1>
                                            <h3 className='text-center underline underline-offset-4 decoration-violet-800 decoration-underline'>{item.role}</h3>
                                            <h2 className='text-center  font-medium font-sans'>{item.tagline}</h2>
                                            <div className="flex flex-row text-center justify-center gap-2 pt-4">
                                                {
                                                    item.linkedin ?
                                                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className='text-center text-blue-900 hover:text-blue-500'>
                                                            <LinkedInIcon />
                                                        </a>

                                                        : null
                                                }
                                                {item.github ? <a href={item.github} target="_blank" rel="noopener noreferrer" className='text-center text-violet-600 hover:text-blue-500'>
                                                    <GitHubIcon />
                                                </a> : null}
                                                {item.twitter ? <a href={item.twitter} target="_blank" rel="noopener noreferrer" className='text-center text-blue-900 hover:text-blue-500'>
                                                    <TwitterIcon />
                                                </a> : null}


                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>


            </div>
        </>
    )
}

export default Teams
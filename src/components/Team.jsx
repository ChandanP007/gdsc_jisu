import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar } from '@mui/material';

import Data from '../data/team.json';

function Team() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    // fetch data from file and set state
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(Data);
            setLoading(false);
        }, 3500);
    }, []);





    return (
        <div className=" pt-20 text-center dark:bg-[#182232]">
            <h1 className='lg:text-6xl text-2xl dark:text-white font-mono'>Organizers</h1>
            <p className='dark:text-white font-extralight font-mono pt-5'>
                We are a team of passionate developers who are passionate about building great products.
            </p>
            <div className="lg:px-24 sm:p-5">

                <div className=" grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    {loading ? (data.map(e => { return <Loading /> })) : data.map((item) => {
                        return (
                            <div className='p-0 flex flex-col   dark:bg-black m-3 bg- shadow-2xl  dark:shadow-grey-400  dark:shadow-lg   justify-center rounded-xl dark:border-white  border-2 dark:hover:bg-black dark:hover:shadow-lg dark:hover:shadow-teal-300 transition-all duration-200 ease-in  hover:scale-105  '
                                key={item.id} title={
                                    item.name + " " + item.role + " " + item.tagline + " " + item.id
                                } >
                                <div className='flex justify-center pt-5 pb-1  rounded-lg'>
                                    <Avatar src={item.image} alt={item.name} sx={{ width: 150, height: 150 }} className={`z-[0] shadow-lg border-4 border-cyan-200`} />
                                </div>
                                <div className="p-5 font-mono dark:text-white">
                                    <h1 className='text-2xl text-center font-mono'>{item.name}</h1>
                                    <h3 className='text-center underline underline-offset-4 decoration-yellow-800 decoration-underline' title={item.role}>{item.role}</h3>
                                    <h2 className='text-center  font-thin font-sans'>{item.tagline}</h2>
                                    <div className="flex flex-row text-center justify-center gap-2 pt-4">
                                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className='text-center text-blue-900 hover:text-blue-500'>
                                            <LinkedInIcon />
                                        </a>
                                        <a href={item.github} target="_blank" rel="noopener noreferrer" className='text-center text-violet-700 hover:text-violet-500'>
                                            <GitHubIcon />
                                        </a>
                                        <a href={item.twitter} target="_blank" rel="noopener noreferrer" className='text-center text-blue-700 hover:text-blue-500'>
                                            <TwitterIcon />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Team
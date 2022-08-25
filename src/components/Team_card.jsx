import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar } from '@mui/material';

function Team_card(data) {

    const { name, image, linkedin, tagline, github, role, twitter, border_color } = data.data;
    return (
        <>
            <div className='p-4 flex flex-col bg-white  dark:bg-bg-dark m-10  shadow-2xl  dark:shadow-grey-400  dark:shadow-sm   justify-center rounded-xl dark:border-white  border-2'>
                <div className='flex justify-center pt-5 pb-1'>
                    <Avatar src={image} alt={name} sx={{ width: 150, height: 150 }} className={`z-[0] shadow-lg border-4 border-${border_color}-700`}/>
                </div>
                <div className="p-5 font-mono dark:text-white">
                    <h1 className='text-2xl text-center font-mono'>{name}</h1>
                    <h3 className='text-center underline underline-offset-4 decoration-violet-800 decoration-underline'>{role}</h3>
                    <h2 className='text-center  font-thin font-sans'>{tagline}</h2>
                    <div className="flex flex-row text-center justify-center gap-2 pt-4">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className='text-center text-blue-900'>
                            <LinkedInIcon />
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className='text-center text-violet-700'>
                            <GitHubIcon />
                        </a>
                        <a href={twitter} target="_blank" rel="noopener noreferrer" className='text-center text-blue-700'>
                            <TwitterIcon />
                        </a>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Team_card
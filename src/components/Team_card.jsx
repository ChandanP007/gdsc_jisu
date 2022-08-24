import React from 'react'


function Team_card(member) {
    const { name, role, image, linkedin, github } = member;
  return (
   <>
    <div className='bg-white dark:bg-bg-dark text-center'>
        <div className='p-10'>
            <img src={image} alt={name} className='rounded-full h-32 w-32' />
            <h1 className='text-2xl font-bold text-black'>{member.name}</h1>
            <h1 className='text-xl font-medium'>{role}</h1>
            <div className='flex justify-center'>
                <a href={linkedin} className='text-blue-500 hover:text-blue-700'>
                    <i className="fab fa-linkedin fa-2x">Linkedin</i>
                </a>
                <a href={github} className='text-blue-500 hover:text-blue-700'>
                    <i className="fab fa-github fa-2x">Github</i>
                </a>
            </div>
        </div>


    </div>

   </>
  )
}

export default Team_card
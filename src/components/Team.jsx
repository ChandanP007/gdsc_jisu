import React, { useEffect } from 'react'
import Team_card from './Team_card'
import { useState } from 'react'


function Team() {

    const [Teams, setTeams] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    fetch("../../team_data.json").then(res => res.json()).then(data => {
        setLoading(true); 
        setTeams(data) 
        setLoading(false);
        console.log(Teams)
    }).catch(err => console.log(err));
    }, []);

    return (
        <div className="container h-[900px] bg-yellow-200 p-10 text-center mx-auto">
            <h1 className='lg:text-4xl text-2xl'>Team</h1>
            <div className="p-10">
                {loading ? <h1>Loading...</h1> : Teams.map(member => <Team_card key={member.id} member={member} />)}
            </div>


        </div>
    )
}

export default Team
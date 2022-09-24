import React from 'react'


const Hero = () => {

    function Scroll() {
        window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth',
        })
    }



    return (
        <>
            <div className=" main-down-arrow w-[20px] h-auto absolute bottom-0 block left-[50%]  cursor-pointer animate-bounce transition-all duration-500" onClick={Scroll}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
                    <g id="Group_2" data-name="Group 2" transform="translate(-966 -967.48)">
                        <path id="Path_1" data-name="Path 1" d="M982,967.98V1011.1" transform="translate(-1.5)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="1"></path>
                        <path id="Path_2" data-name="Path 2" d="M966.813,997.8l13.973,13.577L994.363,997.8" transform="translate(-0.313)" fill="none" stroke="#141414" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                    </g>
                </svg>
            </div>
        </>
    );
}

export default Hero
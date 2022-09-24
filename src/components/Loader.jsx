import React from 'react'

function Loader() {
    return (
        <div className="flex flex-col justify-center items-center min-w-fit">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900 dark:border-cyan-300"></div>
        </div>
    )
}

export default Loader
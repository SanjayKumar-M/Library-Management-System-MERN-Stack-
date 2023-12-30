import React from 'react'

const Lobby = () => {
    return (
        <>
            <div className='flex items-center justify-center p-11 bg-slate-500'> 
                <p className='font-extrabold text-center text-5xl font-mono'>Cosmic Collab</p>
                
            </div>

            <div className='flex items-center justify-center flex-col mt-80'>


                <input />
                <button> Join Meet</button>
                <p>OR</p>

                <button>Create New Meet</button>
            </div>
        </>
    )
}

export default Lobby
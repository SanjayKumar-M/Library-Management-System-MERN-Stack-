import React from 'react'

const Lobby = () => {
    return (
        <>
            <div className='flex items-center justify-center p-11 bg-slate-500'> 
                <p className='font-extrabold text-center text-5xl font-mono'>Cosmic Collab</p>
                
            </div>

            <div className='flex items-center justify-center flex-col mt-80'>


                <input className='border-black' />
                <button className='bg-black text-white p-3 pl-11 pr-11 rounded-full'> Join Meet</button>
                <p>OR</p>

                <button className='bg-black text-white p-3 pl-3 rounded-full'>Create New Meet</button>
            </div>
        </>
    )
}

export default Lobby
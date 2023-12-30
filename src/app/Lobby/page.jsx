import React from 'react'

const Lobby = () => {
    return (
        <div >
            <div className='flex items-center justify-center p-11 bg-slate-500'>
                <p className='font-extrabold text-center text-5xl font-mono'>Cosmic Collab</p>

            </div>

            <div className='flex items-center justify-center flex-col gap-4'>


                <input className='border-black' />
                <button className='bg-black text-white p-3 pl-11 pr-11 rounded-full shadow-2xl'> Join Meet</button>
                <p>OR</p>

                <button className='bg-black text-white p-3 pl-11 pr-11 rounded-full shadow-xl'>New Meet</button>
            </div>

            



        </div>
    )
}

export default Lobby
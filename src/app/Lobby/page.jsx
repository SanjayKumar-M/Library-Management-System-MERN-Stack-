import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Lobby = () => {
    const router = useRouter()
    const [roomId, setRoomId] = useState('')
  
    const createAndJoin = () => {
      const roomId = uuidv4()
      router.push(`/${roomId}`)
    }
  
    const joinRoom = () => {
      if (roomId) router.push(`/${roomId}`)
      else {
        alert("Please provide a valid room id")
      }
    }
    return (
        <div >
            <div className='flex items-center justify-center p-11 bg-slate-500'>
                <p className='font-extrabold text-center text-5xl font-mono'>Cosmic Collab</p>

            </div>

            <div className='flex items-center justify-center flex-col gap-7 mt-52 '>


                <input className='border-black bg-slate-200 p-4 rounded-2xl text-l' placeholder='Enter id' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
                <button className='bg-black text-white p-3 pl-11 pr-11 rounded-full shadow-2xl font-bold text-center text-xl' onClick={joinRoom}> Join Meet</button>
                <p className='font-extrabold text-center text-xl font-mono' >OR</p>

                <button className='bg-black text-white p-3 pl-11 pr-11 rounded-full shadow-xl font-bold text-center text-xl' onClick={createAndJoin}>New Meet</button>
            </div>

        </div>
    )
}

export default Lobby
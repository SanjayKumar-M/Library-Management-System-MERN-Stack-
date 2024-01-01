import React, { useEffect } from 'react'
import { useSocket } from '../context/Socketclient'
import usePeer from '../hooks/usePeer';
import useMediaStream from '@/hooks/useMediaStream';
import Player from '@/Components/Player';
import { useRouter } from 'next/router';

const Room = () => {
  const router = useRouter()
    const socket = useSocket();
    const {peer, myId} = usePeer(router);
    const {stream} = useMediaStream();

    useEffect(()=>{
      if(!socket) return;
      const handleUserConnected = (newUser)=>{
        console.log("User is connected")
      }
      socket.on('user-connected',handleUserConnected)
      return () =>{
        socket.off('user-connected',handleUserConnected)
      }
    },[socket])
  return (
    <div>
      <Player  url={stream} muted playing playerId={myId}/>
    </div>
  )
}

export default Room
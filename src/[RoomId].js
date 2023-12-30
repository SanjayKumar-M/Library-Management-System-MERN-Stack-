import React from 'react'
import { useSocket } from './context/Socketclient'
import usePeer from './app/hooks/usePeer';

const Room = () => {
    const socket = useSocket();
    const {peer, myId} = usePeer();
  return (
    <div>Room</div>
  )
}

export default Room
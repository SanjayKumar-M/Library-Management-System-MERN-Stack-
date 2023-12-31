import React from 'react'
import { useSocket } from '../context/Socketclient'
import usePeer from '../hooks/usePeer';
import useMediaStream from '@/hooks/useMediaStream';

const Room = () => {
    const socket = useSocket();
    const {peer, myId} = usePeer();
    const {stream} = useMediaStream();
  return (
    <div>Room</div>
  )
}

export default Room
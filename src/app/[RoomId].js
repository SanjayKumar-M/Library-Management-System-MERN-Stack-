import React from 'react'
import { useSocket } from '../context/Socketclient'
import usePeer from '../hooks/usePeer';
import useMediaStream from '@/hooks/useMediaStream';
import Player from '@/Components/Player';

const Room = () => {
    const socket = useSocket();
    const {peer, myId} = usePeer();
    const {stream} = useMediaStream();
  return (
    <div>
      <Player  url={stream} muted playing playerId={myId}/>
    </div>
  )
}

export default Room
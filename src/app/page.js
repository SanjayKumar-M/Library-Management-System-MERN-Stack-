"use client"
import React from 'react';
import { useEffect } from 'react';
import { useSocket } from '@/context/Socketclient';
import { Socketclient } from '@/context/Socketclient';
import usePeer from '../hooks/usePeer';

function Home() {
  const socket = useSocket();
  usePeer()
  
  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id);
    });
  }, [socket]);

  return <div>Hello</div>;
}

export default function HomePage() {
  return (
    <Socketclient>
      <Home />
    </Socketclient>
  );
}

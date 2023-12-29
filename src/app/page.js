"use client"
import React from 'react'
import { useSocket } from '@/context/Socketclient'
import { useEffect } from 'react'
import { Socketclient } from '@/context/Socketclient'


function Home(){
  const socket = useSocket();
  useEffect(()=>{
    socket?.on("connect",()=>{
      console.log(socket.id)
    }) 
  },[socket])
  
  return (
    <Socketclient>Hello</Socketclient>
    
  )
}

export default Home
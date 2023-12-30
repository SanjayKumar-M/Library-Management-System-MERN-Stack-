import { useEffect, useRef, useState } from "react";

import { useSocket } from "@/context/Socketclient";

const usePeer = () =>{
    const [peer, setPeer] = useState(null);
    const [myId, setmyId] = useState('')
    const isPeerSet = useRef(false);
    useEffect(()=>{
        if(isPeerSet.current) return;
        isPeerSet.current = true;
        (async function initPeer(){
            const myPeer = new (await import('peerjs')).default()
            setPeer(myPeer)

            myPeer.on('open',(id)=>{console.log(`our peer id is ${id}`)})
            setmyId(id);
        })()
    },[])

    return {
        peer, myId
    }
}

export default usePeer;
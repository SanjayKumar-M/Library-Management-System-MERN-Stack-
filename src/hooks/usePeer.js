import { useEffect, useRef, useState } from 'react';
import { useSocket } from '@/context/Socketclient';
import { useRouter } from 'next/navigation';

const usePeer = () => {
    const router = useRouter();
    const socket = useSocket();
    const [peer, setPeer] = useState(null);
    const [myId, setMyId] = useState('');
    const isPeerSet = useRef(false);

    useEffect(() => {
        if (!router || !router.query || isPeerSet.current || !router.query.roomId || !socket) return;
        isPeerSet.current = true;

        (async function initPeer() {
            const myPeer = new (await import('peerjs')).default();
            setPeer(myPeer);

            myPeer.on('open', (id) => {
                console.log(`our peer id is ${id}`);
                setMyId(id);
                socket?.emit('join room', router.query.roomId, id);
            });
        })();
    }, [router, socket]);

    return {
        peer,
        myId,
    };
};

export default usePeer;

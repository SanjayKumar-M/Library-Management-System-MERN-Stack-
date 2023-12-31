import { useState ,useEffect} from "react";
const useMediaStream = () =>{

    const [state,setState] = useState(null);
    useEffect(()=>{
        (async function initStream(){
            const stream = await navigator.mediaDevices.getUserMedia({
                audio:true,
                video:true
            })
        })
    })
}

export default useMediaStream;
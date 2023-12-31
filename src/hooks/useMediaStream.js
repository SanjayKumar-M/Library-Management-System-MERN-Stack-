import { useState ,useEffect, useRef} from "react";
const useMediaStream = () =>{

    const [state,setState] = useState(null);

    const isStreamSet = useRef(false);
    useEffect(()=>{
        (async function initStream(){
            try{
            const stream = await navigator.mediaDevices.getUserMedia({
                audio:true,
                video:true
            })
            console.log("setting your stream");
            setState(stream)
        }
        catch(e){
            console.log(e)
        }
        })
    },[])
    return{
        stream:state
    }
}

export default useMediaStream;
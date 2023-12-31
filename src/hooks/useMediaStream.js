import { useState ,useEffect} from "react";
const useMediaStream = () =>{

    const [state,setState] = useState(null);
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
}

export default useMediaStream;
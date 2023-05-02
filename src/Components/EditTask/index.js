import { useState } from "react";
import { Button } from "react-bootstrap";

export function EditTask(){
    const [isShow,invokeModal] = useState(false);
    const initmodal = () =>{
       return invokeModal(!isShow);
    }
    return(
        <>
        <Button onClick={initmodal}>Edit</Button>
        </>
    )
}
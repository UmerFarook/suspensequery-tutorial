import React from "react";
import {useRef, useState} from "react";

function RefComponent() {
     const [number, setNumber] = useState<number>(0);

     const numInput  = useRef<HTMLInputElement>(null)
     const updateValue =()=>{
         setNumber(Number(numInput?.current?.value) || 0);

     }

    return (
        <div>
            <h1>{number}</h1>
            <input ref={(node)=>{
                node?.focus();
                numInput.current = node;
                return ()=> {
                  console.log('cleaned up')
                }
            }} type={'text'} placeholder={'Enter Somevalue'}/>
            <button onClick={updateValue}>Update</button>
        </div>
    );
}

export default RefComponent;
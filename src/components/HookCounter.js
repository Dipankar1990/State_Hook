import React,{useState} from 'react';
const HookCounter = () => {
    const [count, setCount] = useState(50)
    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        </>
     );
}
 
export default HookCounter;
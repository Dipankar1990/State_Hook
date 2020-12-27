import React, { useState } from 'react';
const HookCounterTwo = () => {
    const InitialValue = 0
    const [count,setCount] = useState(InitialValue)
    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count +1)}>Increment </button>
        <button onClick={()=> setCount(count -1)}>Decrement </button>
        <button onClick={()=> setCount(InitialValue)}>Reset </button>
        </>
     );
}
 
export default HookCounterTwo;
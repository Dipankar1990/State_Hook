import React,{useState} from 'react';
const UseStateWithObject = () => {
    const [name, setName] = useState({firstName:"", lastName:""})
    return ( 
        <> 
        <form>  
            <h1>Your First Name is {name.firstName}</h1>
            <input type="text" value={name.firstName} 
            onChange={(e)=>setName({...name,firstName: e.target.value})}/>

            <h1>Your Last Name is {name.lastName}</h1>
            <input type="text" value={name.lastName} 
            onChange={(e)=>setName({...name, lastName: e.target.value})}/>
        </form>
        </>
     );
}
 
export default UseStateWithObject;
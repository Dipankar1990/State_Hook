import React,{useState} from 'react';
const UseStateWithArray = () => {
    const [items, setItems] = useState([])

   const addItem = () =>{
        setItems([...items,{
           id:items.length,
           value: Math.floor(Math.random()*10)+1
        }])
    }
    console.log(addItem)
    return ( 
        <>  
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {items.map((items)=>{
                    <li key={items.id}>{items.value}</li>
                })}
            </ul>
        </>
     );
}
 
export default UseStateWithArray;
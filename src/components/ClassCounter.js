import React, { Component } from 'react';
class ClassCounter extends Component {
    state = { 
        count:0
     }

     IncrementCount =()=>{
        this.setState(
            {count:this.state.count +1}
        )
     }
    render() { 
        return ( 
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.IncrementCount}>Increment</button>
            </>
         );
    }
}
 
export default ClassCounter;
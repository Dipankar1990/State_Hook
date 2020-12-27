import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithArray from './components/UseStateWithArray';

function App() {
  return (
    <div className="App">
     {/* <ClassCounter />
     <HookCounter /> */}
     <HookCounterTwo />
     <UseStateWithObject />
     <UseStateWithArray />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter.js';
import { useEffect, useRef, useState } from 'react';
import { NameShower } from './components/NameShower.js';
import { Gallery } from './components/Gallery.js';
import { General } from './components/ConditionalRendering.js';
import { PrimeNumberCalculator } from './Hooks/UseMemo.js';
import { ParentComponent } from './Hooks/UseCallback.js';
import { Component } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Login } from "./reactRouter/Login.js";
import { Profile } from "./reactRouter/Profile.js";


function App() {
  const [name, setName] = useState("");
  const count2 = useRef(0);
  const [count,setCount] = useState(0)

  const handleUseRef = ()=>{
    count2.current = count2.current+1;
    alert('useRef hook clicked:'+count2.current+ 'times');
  }

  useEffect(()=>{
        alert(`useEffect running ${count} times`);      
  },[count])

  const handleUeEffect = ()=>{
    setCount(count+1);
  }




  
   const router = createBrowserRouter([
      {
          path:"/Login",
          element:<Login/>
          
      },
      {
          path:"/Profile",
          element:<Profile/>
      }
  ])

  return (
    <div className="App">
      <Counter/>
      <input
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />

       <NameShower name = {name}/>

       <Gallery/>

       <General/>

      <button
        onChange={handleUseRef}
      >
        useRefIncrement
      </button>

      <button
        onChange={handleUeEffect}
      >useEffect Counter</button>

      <PrimeNumberCalculator/>

      <ParentComponent/>

      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

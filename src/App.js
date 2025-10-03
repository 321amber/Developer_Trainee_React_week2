import { Form } from 'react-router-dom';
import './App.css';

import { ClassCompExample } from './components/ClassCompExample';
import { UseEffect } from './components/Hooks/UseEffect';
import { UseRef } from './components/Hooks/UseRef';
import { UseStateHook } from './components/Hooks/UseStateHook';
import { PropsExample } from './components/PropsExample';
import { UseMemo } from './components/useMemo';
import { ReactRouter } from './router/ReactRoutes';
import { ContextUser } from './components/ContextApi/ContextUser';
import { ExampleContext } from './components/ContextApi/ExampleContext';
import { SimpleCatching } from './components/SimpleCatching.js';

function App() {
  const exampleProp = "what is your name?";
  return (
    <>
      <ClassCompExample/>
     <p>Hello dev</p>
     <PropsExample example={exampleProp}/>

     <UseStateHook/>

     <UseEffect/>

     <UseRef/>

     <UseMemo/>

      {/* <Form/> */}

     <ReactRouter/>

     <ExampleContext>

     <ContextUser/>
     </ExampleContext>

    {/* <SimpleCatching/> */}

    
    </>
  )
}

export default App;

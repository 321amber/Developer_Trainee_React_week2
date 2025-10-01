import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); 
  return (
    <div>
      <p>Count: {count}</p>
      <p>Other State: {otherState}</p>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Change Other State
      </button>
    </div>
  );
}
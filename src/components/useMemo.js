import { useState, useMemo } from 'react';

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  const calculateExpensiveValue = (num, factor) => {
    let result = num;
    for (let i = 0; i < 100000000; i++) {
      result += factor;
    }
    return result;
  };


  const memoizedExpensiveValue = useMemo(() => {
    return calculateExpensiveValue(count, multiplier);
  }, [count, multiplier]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Expensive Value: {memoizedExpensiveValue}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
    </div>
  );
};

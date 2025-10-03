import { useState, useEffect } from 'react';

export function UseEffect() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h1>Timer: {seconds}s</h1>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

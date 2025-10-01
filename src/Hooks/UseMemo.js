import { useState, useMemo } from 'react';

export const PrimeNumberCalculator = ()=> {
  const [limit, setLimit] = useState(10000);

  const calculatePrimes = (num) => {
    console.log('Calculating primes...');
    const primes = [];
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  };

  const memoizedPrimes = useMemo(() => calculatePrimes(limit), [limit]);

  return (
    <div>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>Primes up to {limit}: {memoizedPrimes.length}</p>
    </div>
  );
}


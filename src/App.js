import { useState, useCallback } from 'react';
import Hello from './Hello';
import Square from './Square';

import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const nums = [25, 50, 75];

  const increment = useCallback((n) => {
    setCount(c => c + n);
  }, [setCount])

  // This will cause Hello and Square to re-render multiple times because increment gets created every single render. So for those components increment is changing every re-render
  // const increment = n => {
  //   setCount(c => c + n);
  // }

  return (
    <div className="App">
      <Hello increment={increment} />
      <div>Count: {count}</div>
      {
        nums.map(n => <Square increment={increment} n={n} key={n} />)
      }
    </div>
  );
}

export default App;

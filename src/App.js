import { useState } from 'react';

import './App.css';

function App() {

  let [count1, setCount1] = useState(10);
  let [count2, setCount2] = useState(20);

  return (
    <div className="App">
      <button onClick={() => {
        setCount1(currentCount1 => currentCount1 + 1);
        setCount2(currentCount2 => currentCount2 + 1);
      }}>+</button>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
    </div>
  );
}

export default App;

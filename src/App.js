import { useState } from 'react';

import './App.css';

function App() {

  let [{count1, count2}, setCount] = useState({count1: 10, count2: 20});

  return (
    <div className="App">
      <button onClick={() => setCount(currentState => ({...currentState,count1: currentState.count1 + 1}))}>+</button>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
    </div>
  );
}

export default App;

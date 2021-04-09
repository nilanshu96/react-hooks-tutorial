import { useState } from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={()=>setCount(c => c+1)}>increment</button>
    </div>
  );
}

export default App;

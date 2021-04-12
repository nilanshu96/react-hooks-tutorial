import { useReducer } from 'react';

import './App.css';

function reducer(state, action) {

  switch (action.type) {
    case 'increment': return ++state;
    case 'decrement': return --state;
    default: return state;
  }
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

function App() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
    </div>
  );
}

export default App;

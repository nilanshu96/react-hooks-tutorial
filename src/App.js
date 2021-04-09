import { useState, useMemo } from 'react';
import useFetch from './useFetch';
import './App.css';

const computeLongestWord = (arr) => {
  console.log('computeLongestWord called');

  if (!arr) {
    return '';
  }

  let longestWord = '';

  arr.forEach(sentences =>
    sentences.split(" ").forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }))
  return longestWord;
}

function App() {

  const [count, setCount] = useState(0);

  const { data } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json');

  const longestWord = useMemo(() => computeLongestWord(data), [data]); //computeLongestWord would be called multiple times without useMemo

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <div>Longest Kanye Word: {longestWord}</div>
    </div>
  );
}

export default App;

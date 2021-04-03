import { useEffect, useState } from 'react';
import useForm from './useForm';
import Hello from './Hello';
import useFetch from './useFetch';

import './App.css';

function App() {

  const [values, handleChange] = useForm({ email: "", password: "", firstName: "" });
  const [showHellow, toggleHello] = useState(true);
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")||0));
  //using initiator function in useState because we don't want to call JSON.parse in every rerenders

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const { data, loading } = useFetch('http://numbersapi.com/' + count);

  useEffect(() => {
    console.log("render");
    return (() => {
      console.log("re-render / unmount");
    })
  }, [values.email]);

  return (
    <div className="App">
      {showHellow && <Hello />}
      <button onClick={() => toggleHello(!showHellow)}>Toggle Hello</button>
      Email: <input name="email" value={values.email} onChange={handleChange}></input>
      First Name: <input name="firstName" value={values.firstName} onChange={handleChange}></input>
      Password: <input type="password" name="password" value={values.password} onChange={handleChange}></input>
      <div>
        Email: {values.email}, Password: {values.password}
      </div>
      <p>{!data && loading ? "...loading" : data} </p>
      <button onClick={() => setCount(count+1)}>increment</button>
    </div>
  );
}

export default App;

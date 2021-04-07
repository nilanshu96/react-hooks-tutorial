import { useEffect, useState, useRef } from 'react';
import useForm from './useForm';
import Hello from './Hello';

import './App.css';

function App() {

  const [values, handleChange] = useForm({ email: "", password: "", firstName: "" });
  const [showHellow, toggleHello] = useState(true);

  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));

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
      Email: <input ref={inputRef} name="email" value={values.email} onChange={handleChange}></input>
      First Name: <input name="firstName" value={values.firstName} onChange={handleChange}></input>
      Password: <input type="password" name="password" value={values.password} onChange={handleChange}></input>
      <div>
        Email: {values.email}, Password: {values.password}
      </div>

      <button onClick={() => {
        inputRef.current.focus();
        hello.current();
      }}>focus</button>
    </div>
  );
}

export default App;

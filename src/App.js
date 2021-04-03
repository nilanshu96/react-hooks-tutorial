import { useEffect } from 'react';
import useForm from './useForm';

import './App.css';

function App() {

  const [values, handleChange] = useForm({ email: "", password: "", firstName: "" });

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="App">
      Email: <input name="email" value={values.email} onChange={handleChange}></input>
      First Name: <input name="firstName" value={values.firstName} onChange={handleChange}></input>
      Password: <input type="password" name="password" value={values.password} onChange={handleChange}></input>
      <div>
        Email: {values.email}, Password: {values.password}
      </div>
    </div>
  );
}

export default App;

import useForm from './useForm';

import './App.css';

function App() {

  const [values, handleChange] = useForm({email: "", password: ""});

  return (
    <div className="App">
      Email: <input name="email" value={values.email} onChange={handleChange}></input>
      Password: <input type="password" name="password" value={values.password} onChange={handleChange}></input>
      <div>
        Email: {values.email}, Password: {values.password}
      </div>
    </div>
  );
}

export default App;

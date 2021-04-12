import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Index from './pages/index';
import About from './pages/about';

import { UserContext } from './UserContext';
import { useMemo, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
        </ul>
      </div>
      <UserContext.Provider value={providerValue}>
        <Route path='/' exact component={Index}/>
        <Route path='/about/' component={About}/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

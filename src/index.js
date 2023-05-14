import 'bulma/css/bulma.css';
import logo from './img/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyForm from './components/MyForm';
import Unsuccessful from './components/UnsuccessfulLogIn';
import Successful from './components/SuccessfulLogIn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* ROUTING - NAVIGATION BAR  */
// Notes: Creates page routing and optional navigation bar. 
// Commented out 'Log In' as it doesn't make sense on the 'successful' page.
// Kept the logo link for future reference/learning if that is ok :) 

const Routing = () => {
  return (
    <Router>
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <Link class="navbar-item" Link to="/">
              <img src={logo} alt="my logo" width="112" height="28" />
            </Link>            
            
              {/* <Link to="/" className="navbar-item">Log In</Link> */}
              
          </div>
        </nav>
        
        <Routes>
            <Route path="/" index element= {<App />} />
            <Route path="/Loginpage" element= {<MyForm />} />
            <Route path="/unsuccessful" element= {<Unsuccessful />} />
            <Route path="/successful" element= {<Successful />} />          
        </Routes>
      </div>
    </Router>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);



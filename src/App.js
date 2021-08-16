import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup, Header, Home, Account } from './Components';
import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <main className="main">
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { Home } from './components/home';
// import { Restaurant } from './components/restaurant';
// import { Signin } from './components/signin';
// import { Signup } from './components/signup';
import './App.css';
import './services/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


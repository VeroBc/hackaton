import React from 'react';
import { Home } from './components/home';
// import { Restaurant } from './components/restaurant';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { About } from './components/about';
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
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  const [light] = useState('dark');
  return (
    <div className="App" data-theme={light}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

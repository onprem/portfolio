import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from 'Components/Nav/Nav';
import Home from 'Components/Home/Home';
import Projects from 'Components/Projects/Projects';
import './App.css';

function App() {
  const [light, setLight] = useState(false);
  return (
    <div className="App" data-theme={light ? `light` : `dark`}>
      <Nav setLight={setLight} />
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

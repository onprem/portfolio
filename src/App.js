import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from 'Components/Nav/Nav';
import Home from 'Components/Home/Home';
import Projects from 'Components/Projects/Projects';
import './App.css';

function App() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    const theme = !light ? `light` : `dark`; // negation coz we are toggling the theme
    localStorage.setItem("theme", theme);
    setLight(l => !l);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === 'light') setLight(true);
  }, []);

  return (
    <div className="App" data-theme={light ? `light` : `dark`}>
      <Nav toggleTheme={toggleTheme} />
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

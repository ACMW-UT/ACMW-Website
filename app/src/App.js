import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
  );
}

export default App;

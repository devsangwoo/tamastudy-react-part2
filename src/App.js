import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';

import React from 'react';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tama" component={Tama} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

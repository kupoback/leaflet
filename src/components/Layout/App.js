import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className='App' fluid>
      <Router>
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

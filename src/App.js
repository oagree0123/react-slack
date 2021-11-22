import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* chat */}
              </Route>
            </Switch>
          </AppBody>
        </div>
      </Router>
    </div>
  );
}

export default App;

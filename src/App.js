import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import routes from './routes';
import Header from "./components/Header";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Invoice from "./components/invoice";

function App() {
  const history = useHistory();
  return (
    <>
      {
        //localStorage.getItem('capstone') ? null : <Header />
      }
      <Header />
      <Switch>
        <Route path={routes.signup}>
          <Signup />
        </Route>
        <Route path={routes.login}>
          <Login />
        </Route>
        <Route path={routes.dashboard}>
          <Dashboard />
        </Route>
        <Route path={routes.invoice}>
          <h1>invoice</h1>
        </Route>
        <Route path={routes.home}>
          {
            localStorage.getItem('capstone') ?
              history.push(routes.dashboard.replace(":id", localStorage.getItem('capstone')))
              :
              <div className="container">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>WELCOME TO HOME PAGE</h1>
                </header>
              </div>
          }

        </Route>
      </Switch>
    </>
  );
}

export default App;
/*
<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
*/
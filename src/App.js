import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import Header from "./components/Header";

export default function App() {
  const state = useSelector(state => state);
  return (
    <div>
      {state.errorAlertVisible ? <div className="alert alert-danger" role="alert" style={{ margin: "0" }}>{state.errorAlertText}</div> : <div></div>}
      {state.infoAlertVisible ? <div className="alert alert-info" role="alert" style={{ margin: "0" }}>{state.infoAlertText}</div> : <div></div>}
      {state.logged ? <Header /> : <div></div>}
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/login">
            {state.logged ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route path="/home">
            {state.logged ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/posts">
            {state.logged ? <Posts /> : <Redirect to="/login" />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
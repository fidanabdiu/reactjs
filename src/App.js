import './App.css';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

export default function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div>
      <Header />
      {state.errorAlertVisible ? <div className="alert alert-danger" role="alert" style={{ margin: "0" }}>{state.errorAlertText}</div> : <div></div>}
      {state.infoAlertVisible ? <div className="alert alert-info" role="alert" style={{ margin: "0" }}>{state.infoAlertText}</div> : <div></div>}
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
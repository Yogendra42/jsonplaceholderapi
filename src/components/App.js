import React from "react";
import '../css/App.css';
import Login from "./login";
import Post from "./post";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { withCookies, CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <div id="main">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={Login}
              />
              <Route
                exact
                path="/post"
                component={Post}
              />
            </Switch>
      </Router>
        </div>
      </CookiesProvider>
    </div>
  );
}

export default withCookies(App);
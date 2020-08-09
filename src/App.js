import React from "react";
import "./style.css";
import TopMenu from "./component/TopMenu";
import login from "./component/login";
import SignUp from "./component/SignUp";
import Articles from "./pages/Article";
import ArticleDetail from "./component/ArticleDetail"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Articles} />
        <Route path="/Sign-in" component={login} />
        <Route path="/Sign-up" component={SignUp} />
        <Route path ="/:slug/article" component ={ArticleDetail} />
      </div>
    </Router>
  );
};

export default App;

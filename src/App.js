import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./components/Landing.jsx"
import Main from "./components/Main.jsx"
import Create from "./components/Create.jsx"
import Scan from "./components/Scan.jsx"
import Login from "./components/Login.jsx"


const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/main"  component={Main} />
      <Route path="/create" component={Create} />
      <Route path="/scan" component={Scan} />
    </div>
  </Router>
);

export default App;
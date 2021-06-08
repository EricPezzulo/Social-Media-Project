import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile" exact component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

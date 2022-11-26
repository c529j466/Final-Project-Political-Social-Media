import navbar from "./components/navbar/Topbar"
import Home from "./pages/home/Home";
import signin from "./pages/signin/signin";
import Profile from "./pages/profile/Profile";
import signup from "./pages/signup/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <signup />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <signup />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
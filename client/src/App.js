import Topbar from "./Components/topbar/Topbar";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/register">
            {user ? <Home/> :<Register />}
        </Route>
        <Route path="/login">
            {user ? <Home/> : <Login />}
        </Route>
        <Route path="/write">
            {user ? <Write /> : <Register/>}
        </Route>
        <Route path="/setting">
            {user ? <Setting /> : <Register/>}
        </Route>
        <Route path="/post/:postid">
            <Single />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Home from "./Home"
import {AuthProvider} from "./Auth";
import Login from "./login"
import SignUp from "./signUp";

function App() {
  return (
      <AuthProvider>
          <Router>
              <div>
                  <Route exact path={"/"} component={Home}></Route>
                  <Route exact path="/login" component={Login} ></Route>
                  <Route exact path="/signUp" component={SignUp}></Route>
              </div>
          </Router>
      </AuthProvider>
  );
}

export default App;


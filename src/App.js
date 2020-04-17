import React,{useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { Header } from "./Header";
import { External } from "./External";
import { LoginAndOut } from "./LoginAndOut";
import { Admin } from "./Admin";

export default App;

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoginStatus = status => {
    setIsLoggedIn(status);
  }

  return (
    <Router>
      <div>
        <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/external">
            <External />
          </Route>
          <Route path="/admin-page">
            <Admin />
          </Route>
          <Route path="/login-out">
            <LoginAndOut 
             loginMsg={isLoggedIn ? "Logout" : "Login"}
             isLoggedIn={isLoggedIn}
             setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home - Andreas deployment</h1>
      <p>Home is were the wifi connects automatically</p>
      <hr/>
      <p style={{width: 750}}>
        The frontEnd startcode is easy to use and set up. 
        The guide helps a lot and the only other thing that could make it more useful/easier to follow is if it had pictures.
        The same goes for the backEnd startcode, however this a bit more challenging, as Travis is VERY sensitive and 
        there are so many things that need to work together for it to work properly, but when the startcode is fully set up it works perfectly. <br/>
        You just have to do it a lot of times to get better at it I guess ¯\_(ツ)_/¯
      </p>
      <a href="https://github.com/PetersenAndreas/CA3-Gruppe3-Front" style={{color: "blue"}}>To the FrontEnd</a> <br/>
      <a href="https://github.com/PetersenAndreas/CA3-Gruppe3" style={{color: "blue"}}>To the BackEnd</a> <br/>
      <img src="https://media1.tenor.com/images/247d8ee14f4569a7a5d033081ec785d2/tenor.gif" alt="He smash"  style={{width: 520, height: 450}}/>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>How did you get here? You shouldn't be here..</h2>
    </div>
  )
}
import React from 'react';
import './App2.css';
import GameContainer from './Components2/GameContainer';
import Form from './Components2/Form';
import LoginForm from './Components2/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components2/Home';
import Contact from './Components2/Contact';
import About from './Components2/About';

function App2() {


  return (

    <div>
      {/*<Router>
        <div>
          <h2>React routing</h2>
          <nav>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/contact'}>Contact</Link></div>
            <div><Link to={'/about'}>About</Link></div>
          </nav>
        </div>
        <hr/>
        <Switch>
         
          <Route exact path="/" component={Home}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route exact path="/About" component={About}></Route>
        </Switch>
      </Router>*/}
      <GameContainer></GameContainer>
    </div>
  )
}

export default App2;

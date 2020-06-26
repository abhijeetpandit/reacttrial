import React from 'react';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import EventBindingNew1 from './components/EventBindingNew1';
import EventBindingNew2 from './components/EventBingingNew2';
import EventBindingNew3 from './components/EventBingingNew3';
import EventBindingNew4 from './components/EventBingingNew4';
import EventBindingNew0 from './components/EventBindingNew0';
import EventBindingNewFunctional from './components/EventBindingNewFunctional';
import { Hello } from './components/Hello';
import GreetUser from './components/GreetUser';
import WelcomeUser from './components/WelcomeUser';
import { FunctionalWelcomeUser } from './components/FunctionalWelcomeUser';
import User from './components/User';
import Counter from './components/Counter';
import MyClassCmp1 from './components/MyClassCmp1';
import ConditionalRendering from './components/ConditionalRendering';
import HookCmp1 from './components/HookCmp1';
import HookCmp2 from './components/HookCmp2';
import HookCmp3 from './components/HookCmp3';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickHOC from './components/ClickHOC';

/*import HI from './components/Greet';
import HELLO from './components/Welcome';*/

function App() {
  return (
    <div className="App">
      Hi Abhijeet
      <hr></hr>
      {/*<Greet/>
      <Greet/>
      <Greet/>
      <Greet/>
      <Welcome/>
      <Welcome/>
      <hr></hr>
      <EventBindingNew0></EventBindingNew0>
      <EventBindingNew1></EventBindingNew1>
      <EventBindingNew2></EventBindingNew2>
      <EventBindingNew3></EventBindingNew3>
      <EventBindingNew4 uname="John"></EventBindingNew4>
      <EventBindingNew4 uname="Constantine"></EventBindingNew4>
      <EventBindingNewFunctional></EventBindingNewFunctional>
      <Hello></Hello>
      <GreetUser name="Abhijeet Pandit" city="Pune"></GreetUser>
      <WelcomeUser uname="Mike" city="New York">
        <p>Display this para</p>
        <h2>Display this h2</h2>
      </WelcomeUser>
      <WelcomeUser uname="Khali" city="Punjab">
        <p> This Khali</p>
        <button>Click me</button>
      </WelcomeUser>
      <WelcomeUser></WelcomeUser>
      <FunctionalWelcomeUser uname="Mike" city="New York"></FunctionalWelcomeUser>
      <FunctionalWelcomeUser></FunctionalWelcomeUser>*/}
      <User></User>
      <Counter></Counter>
      <Counter></Counter>
      <MyClassCmp1></MyClassCmp1>
      <ConditionalRendering userName = "admin" password = "admin123"></ConditionalRendering>
      <HookCmp1></HookCmp1>
      <HookCmp2></HookCmp2>
      <HookCmp3 userName="John Conor"></HookCmp3>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <ClickHOC></ClickHOC>
    </div>
  );
}

export default App;

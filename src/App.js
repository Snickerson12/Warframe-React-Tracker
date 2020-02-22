import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Frames from './components/Frames';
import Weapons from './components/Weapons';
import Login from './components/Login';
import Enroll from './components/Enroll';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/frames' component={Frames}/>
          <Route exact path='/weapons' component={Weapons}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/enroll' component={Enroll}/>
        </div>
      </div>
    );
  }
}

export default App;

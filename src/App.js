import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Frames from './components/Frames';
import Weapons from './components/Weapons';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/frames' component={Frames}/>
          <Route exact path='/weapons' component={Weapons}/>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frames from './components/Frames';
import Weapons from './components/Weapons';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='homepage'>
            Warframe!
        </div>
        <div>
          <Route exact path='/home' component={App}/>
          <Route exact path='/frames' component={Frames}/>
          <Route exact path='/weapons' component={Weapons}/>
        </div>
      </div>
    );
  }
}

export default App;

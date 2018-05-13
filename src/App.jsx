import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import Navbar from './Components/CustomNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/news' component={News} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

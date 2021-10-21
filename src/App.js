import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/auth/Login';


import {HeaderComponent} from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/Header/about';
import Services from './components/Header/services';
import Contacts from './components/Header/contact';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersList: []
    }
  }

  render() {
    return (
      <div>
        <Router>
        <HeaderComponent />
          <div>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/contact-us' component={Contacts} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>

    );
  }
}

export default App;

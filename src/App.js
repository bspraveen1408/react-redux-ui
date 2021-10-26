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
import LogoutPage from './components/auth/logout/logout';
import LoginPage from './components/auth/Login';
import {Signup} from './components/auth/signup/signup';
import Profile from './components/profile/profile';
import {NotFoundComponent} from './components/NotFoundComponent/NotFoundComponent';
import Employees from './components/auth/signup/employees';

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
              <Route path='/about' component={About} exact/>
              <Route path='/services' component={Services} exact />
              <Route path='/contact-us' component={Contacts} exact/>
              <Route path='/logout' component={LogoutPage}/>
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/employees' component={Employees}/>
              <Route path='/' component={Home} exact/>
              <Route path='/*' component={NotFoundComponent} exact/>
              
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>

    );
  }
}

export default App;

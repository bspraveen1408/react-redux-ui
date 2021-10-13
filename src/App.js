import React,{Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/auth/Login';
import Home from './components/Home/Home';

class  App extends Component {
  constructor(props){
    super(props)
    this.state={
      usersList:[]
    }
  }

  render(){
    return ( 
      <div>
      <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>

);
}
}

export default App;

import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import {getUsers} from './redux/actions/appActions'
class  App extends Component {
  constructor(props){
    super(props)
    this.state={
      usersList:[]
    }
  }
  componentWillMount(){
    this.props.getUsers()
  }
  componentWillReceiveProps(newProps){
    if(newProps.usersList){
      this.setState({usersList:newProps.usersList})
    }
  }

  render(){
    return ( 
      <div>
      <div className="container">
      <h2>React Redux App</h2>
      <h2>Sample React app</h2>
      <h3>Below data is from redux store</h3>
      <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.usersList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
      </div>
    </div>

);
}
}

function mapStateToProps(state) {
  console.log("state",state)
  return {
    usersList: state.usersList,
     
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getUsers: getUsers,
  }, dispatch)
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));

import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUsers} from '../../redux/actions/appActions'
class  Home extends Component {
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
      <div>Home components</div>
    </div>

);
}
}

function mapStateToProps(state) {
  return {
    usersList: state.usersList,
     
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getUsers: getUsers,
  }, dispatch)
}

export default (connect(mapStateToProps, mapDispatchToProps)(Home));

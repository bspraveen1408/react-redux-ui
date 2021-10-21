import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../../redux/actions/appActions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      usersList: ['india', 'idd', 'abc', 'ddf', 'dsfd', 'india', 'idd', 'abc', 'ddf', 'dsfd'],
      results: this.usersList
    }
  }
  componentWillMount() {
    this.props.getUsers()
  }
  componentWillReceiveProps(newProps) {
    if (newProps.usersList) {
      this.setState({ usersList: newProps.usersList })
    }
  }
  handleSearch = (et) => {
    this.setState({ inputText: et.target.value });
    let list = this.state.usersList.filter((item) => {
      if (item.name.includes(et.target.value)) {
        return item;
      }
    })
    this.setState({ results: list })
  }

  render() {
    return (
      <div>
        <div>Home components</div>
        <input type="text" value={this.state.inputText} onChange={this.handleSearch} />
        <div>
          {this.state.results && this.state.results.map((item) => {
            return (
              <div>{item.name}</div>
            )
          })}
        </div>
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

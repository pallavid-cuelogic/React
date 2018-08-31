import React, { Component } from 'react';
import './App.css';
import UserInput from './User/User-input.js';
import UserOutput from'./User/User-output.js';

class App extends Component {
  state = {
    username: 'UserName'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
         <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import UserInput from './User/userInput.js';
import UserOutput from'./User/userOutput.js';

class App extends Component {
  state = {
    username: 'userName'
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
      </div>
    );
  }
}

export default App;



/*{/* multipleUserOutputs = () =>{
            cnt=50

            for(let i=0 ; i < 50; i++){
                <UserOutput userName={this.state.username} />
            }
          }
           }
          {/* for(i=0 ; i < cnt; i++){
              <UserOutput userName={this.state.username} />
          } */

//        <UserOutput userName={this.state.username} />
//        <UserOutput userName={this.state.username} />*/
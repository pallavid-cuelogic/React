import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  style = {
    margin: 'auto',
    padding: '0',
  };

  style1 = {
    display: 'inline-block',
  };

  style2 = {
    margin: '10px',
    display: 'inline-block',
  };

  render(){
    return(
      <div className="App">
        <nav>
          <ul style={this.style}>
            <li style={this.style1}>
              <NavLink to="/courses">
                <h1>Courses</h1>
              </NavLink>
            </li>
            <li style={this.style2}>
              <NavLink to="/users">
                <h1>Users</h1>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

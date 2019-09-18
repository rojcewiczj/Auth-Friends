import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import CreateFriend from "./components/CreateFriend";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friend List</Link>
          </li>
          <li>
          <Link to='/CreateAFriend'>Create A Friend</Link>
          </li>
          

        </ul>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/CreateAFriend" component={CreateFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

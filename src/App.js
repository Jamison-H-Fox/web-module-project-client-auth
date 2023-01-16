import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path='/'>
        <Login />
      </Route>

      <Route exact path='/login'>
        <Redirect to='/' />
      </Route>
      
      <PrivateRoute exact path='/logout' component={Logout} />
      <PrivateRoute exact path='/friends' component={FriendList} />
      <PrivateRoute exact path='/friends/add' component={AddFriend} />
    </div>
  );
}

export default App;

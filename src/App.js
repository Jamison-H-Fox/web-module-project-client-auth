import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import NavBar from './components/NavBar';

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

      <Route exact path='/friends'>
        <FriendList />
      </Route>
      <Route exact path='/friends/add'>
        <AddFriend />
      </Route>
    </div>
  );
}

export default App;

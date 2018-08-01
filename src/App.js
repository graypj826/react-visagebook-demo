import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/index';
import Feed from './Feed/index';
import Sidebar from './Sidebar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Feed />
        <Sidebar />
      </div>
    );
  }
}

export default App;

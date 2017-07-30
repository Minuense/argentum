import React, { Component } from 'react';
import logo from './burger_spins.png';
import ImageContainer from './Components/ImageContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>The Burger's rover pic of the day</h2>
        </div>
        <p className="App-intro">
          <ImageContainer />
        </p>
      </div>
    );
  }
}

export default App;

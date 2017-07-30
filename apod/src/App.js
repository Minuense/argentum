import React, { Component } from 'react';
import Header from './Components/Header.js';
import ImageContainer from './Components/ImageContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <ImageContainer />
        </p>
      </div>
    );
  }
}

export default App;

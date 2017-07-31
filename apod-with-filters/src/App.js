import React, { Component } from 'react';
import logo from './burger_spins.png';
import ImageGrid from './Components/ImageGrid.js';
import Filters from './Components/Filters.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GAPOD gallery with filters</h2>
        </div>
        <p className="App-intro">
            <Filters/>
            <ImageGrid/>
        </p>
      </div>
    );
  }
}

export default App;

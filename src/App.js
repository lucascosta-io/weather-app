import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApp from './WeatherApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="widget-container">
          <WeatherApp />
        </div>
      </div>
    );
  }
}

export default App;

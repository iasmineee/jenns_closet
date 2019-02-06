import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Jenn's Closet
        </header>
        <div>
          <Button text="DRESS ME"
          width={170}
          height={95} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-Header">
            JENN'S WARDROBE
          </header>
          <div className="Content">
            <div className="Content-Left">
              <Button 
                text="AUTO DRESS"
                width={170}
                height={95} 
              />
            </div>
            <div className="Content-Center">
            </div>
            <div className="Content-Right">
              <Button 
                  text="DRESS ME"
                  width={170}
                  height={95} 
                />
            </div>
          </div>
          <footer className="App-Footer">

          </footer>
      </div>
    );
  }
}

export default App;

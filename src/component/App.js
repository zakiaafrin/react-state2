import React, { Component } from 'react';
import './App.css';   // style
import Counter from './Counter.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    );
  }
}
export default App;
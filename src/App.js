import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Evaluation from './Evaluation/Evaluation';
import CardList from './Course/CardList'

class App extends Component {
  render() {
    return (
      <div className="App">
       <CardList></CardList>
      </div>
    );
  }
}

export default App;

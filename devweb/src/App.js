import React, { Component } from 'react';
import './App.css';
import Evaluation from './Evaluation/Evaluation';
import CardList from './Course/CardList'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <CardList></CardList>
      </div>
    );
  }
}

export default App;

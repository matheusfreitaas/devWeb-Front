import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Header from './Header'
import Evaluation from './Evaluation/Evaluation'
import CardList from './Course/CardList'
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Header></Header>
            <Route exact={true} path="/login" component={Login} />
            <Route path="/courses" component={CardList}/>
            <Route path="/evaluation" component={Evaluation}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

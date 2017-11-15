/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import './App.css';
import Header from '../Views/header';
import BodyContainer from './BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
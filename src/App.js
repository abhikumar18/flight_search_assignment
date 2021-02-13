import React, { Component } from 'react';

import './App.css';
// import './reset.css';

import Header from './Header';
import Search from './Search';
import Flights from './flights/Flights'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <section className="app__content">
          <Search></Search>
          <Flights></Flights>
        </section>
      </div>
    );
  }
}

export default App;

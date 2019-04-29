// App.js

import React, { Component } from 'react';
import Header from './layout/Header';
import SideBar from './layout//SideBar';
import Footer from './layout//Footer';

class App extends Component {

  render() {
    return (
      <div className="flex flex-column w-100 h-100">
        <Header />
        <SideBar />
        <Footer />
      </div>
    );
  }
}

export default App;
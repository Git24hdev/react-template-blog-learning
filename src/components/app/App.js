import React, { Component } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from '../home/Home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </BrowserRouter>
    );
  }

}

export default App;

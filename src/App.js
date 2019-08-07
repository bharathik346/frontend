import React, { Component } from 'react';
import './../node_modules/bootstrap-css-only/css/bootstrap.css';
import './App.css';
import ShippingLabelMaker from './components/shippinglabelmaker.component';
import Header from './components/Header';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App container">
          <Header/>
          <h1 className="text-center text-primary">React SPA Demo</h1>
            {/* <Route path="/home" component={Home} /> */}
            <Route exact path="/" component={ShippingLabelMaker} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

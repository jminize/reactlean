import './css/App.css';
import React, { Component } from 'react';
import {BrowserRouter,Route,Swirch} from 'react-router-dom'; 
import Home from './containers/home';
import About from './containers/about';

class App extends Component{
  renderRouter(){
    return(
      <switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </switch>
    );
  }
  render(){
    return(
    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;

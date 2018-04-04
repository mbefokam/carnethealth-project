import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/public/common/Header';
import FooterBand from './components/public/common/FooterBand';
import {BrowserRouter} from 'react-router-dom';
import router from './routes';

class App extends Component {
  render() {
      return(
        <BrowserRouter>
       <div className="container-fluid">
       <Header/>
       <router />
       <FooterBand />
       </div>
       </BrowserRouter>
       );
  }
}
 
export default App;

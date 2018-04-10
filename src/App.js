import React, { Component } from 'react'; 
import './App.css';
import Header from './components/public/common/Header';
import FooterBand from './components/public/common/FooterBand';
import {BrowserRouter} from 'react-router-dom';  

class App extends Component {
  render() {
    return(
      <BrowserRouter>
         <div className="container-fluid">
         <Header/>
         <p> WELCOME HERE </p>
         {/* <router /> */}
         <FooterBand />
        </div>
      </BrowserRouter>
       );
  }
}
 
export default App;

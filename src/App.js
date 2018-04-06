import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/public/common/Header';
import FooterBand from './components/public/common/FooterBand';
import {BrowserRouter} from 'react-router-dom';
import router from './routes';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

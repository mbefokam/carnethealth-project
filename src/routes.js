import React from 'react';
import {Route,   Switch} from 'react-router-dom';
import App from './App';
import HomePage from './components/public/home/HomePage';
import AboutPage from './components/public/about/AboutPage';


export default (
<Switch>
<Route path="/" component={App}>
<Route  path="/" component={HomePage}/>
 <Route path="abosadasdut" component={AboutPage} />
</Route>
</Switch>
);

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './Root';

import About from './About';
import {Route,
      NavLink,
    HashRouter} from "react-router-dom";

import './index.scss';

ReactDOM.render(
  
  <Root>
    <HashRouter>
          <div>
            <h2><NavLink exact to ="/about">About</NavLink></h2>
            <Route exact path="/about" component={About}/>
          </div>
    <App />
    </HashRouter>
  </Root>
  ,
  document.getElementById('root')
);

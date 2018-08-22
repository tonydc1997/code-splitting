import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => 
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <button onClick={() => onRouteChange('Page1')}>Page1</button>
    <button onClick={() => onRouteChange('Page3')}>Page3</button>
  </div>

export default Page2;import React from 'react';

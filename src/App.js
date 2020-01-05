import React from 'react';
import './App.css';

import Logo from '../src/assets/AKoS_Logo-Black_1.png';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <img src={Logo} className="main-logo"/>
        <h1 className="content">Stay Tuned.</h1> 
      </div>
    );
  }
}

export default App;

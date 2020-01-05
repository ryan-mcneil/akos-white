import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Content from './components/content/content.component'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;

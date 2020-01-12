import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Content from './components/content/content.component';
import Validate from './components/validate/validate.component';

import Background from './assets/topo-image.png';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      is_validated: true
    }
  }

  handleClickYes = () => {
    console.log('yes');
    this.setState({is_validated: true})
  }

  handleClickNo = (event) => {
    
  }

  render() {

    return (
      <div className='background' 
      >
        {
          this.state.is_validated ?
            <div>
              <Header className='header'/>
              <Content />
            </div>
            :
            <Validate 
            handleClickYes={this.handleClickYes}
            handleClickNo={this.handleClickNo}
            />
        }
      </div>
    );
  }
}

export default App;

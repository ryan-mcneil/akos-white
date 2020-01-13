import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Content from './components/content/content.component';
import Validate from './components/validate/validate.component';

import { animateScroll as Scroll } from 'react-scroll'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      is_validated: true
    }
  }

  handleClickYes = () => {
    this.setState({is_validated: true})
  }

  handleClickNo = (event) => {
    
  }

  handleClickIcon = () => {
    Scroll.scrollTo(0);
  }


  render() {

    return (
      <div className='background' id='main-page'
      >
        {
          this.state.is_validated ?
            <div>
              <Header className='header' handlePress={this.handleClickIcon}/>
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

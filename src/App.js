import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Content from './components/content/content.component';
import Validate from './components/validate/validate.component';
import MailChimp from './components/mail-chimp/mail-chimp.component'

import { animateScroll as Scroll } from 'react-scroll'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      is_validated: true,
      width: window.innerWidth
    }
  }

  handleClickYes = () => {
    this.setState({ is_validated: true })
  }

  handleClickNo = (event) => {

  }

  handleClickIcon = () => {
    Scroll.scrollTo(0);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  com

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };




  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    return (
      <div className='background' id='main-page'
      >
        {
          this.state.is_validated ?
            (
              // this.state.width > 500 ?
              <div>
                <Header
                  className='header'
                  handlePress={this.handleClickIcon}
                  isMobile={isMobile}
                />
                <Content />
                <MailChimp />
              </div>
              // :
              // <div>
              //   <Header
              //     className='header'
              //     handlePress={this.handleClickIcon}
              //   />
              //   <Content />
              //   <MailChimp />
              // </div>
            )
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

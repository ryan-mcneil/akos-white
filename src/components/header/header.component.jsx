import React from 'react';

import HeaderLink from '../header-link/header-link.component'
import SmallLogo from '../../assets/AKoS_Logo-Solid-Black.png'

import './header.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handlePress: props.handlePress,
      isMobile: props.isMobile,
      headerTitle: "Overview",
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isMobile !== this.state.isMobile) {
      this.setState({ isMobile: nextProps.isMobile })
    }
  }

  render() {
    return (
      <div className='header sticky'>
        {
          this.state.isMobile ?
            <div className='mobile-header'>
              <img className='small-logo' src={SmallLogo} alt="akos-white-logo" onClick={this.state.handlePress} />
              <h1 className='mobile-title'>{this.state.headerTitle}</h1>
            </div>
            :
            <div className='web-header'>

              <div className='small-logo-with-text'>
                <img className='small-logo' src={SmallLogo} alt="akos-white-logo" onClick={this.state.handlePress} />
                <div className='logo-text'>
                  <span>Naturally </span><span className='akos-orange'>spirited</span>
                  <p>Just like you</p>
                </div>
              </div>
              <div className='links'>
                <HeaderLink destination='overview' linkName='Overview' />
                <HeaderLink destination='sustainability' linkName='Sustainability' />
                <HeaderLink destination='section-3' linkName='Section 3' />
                <HeaderLink destination='section-4' linkName='Section 4' />
              </div>
            </div>


        }
      </div>
    )
  }
}



export default Header;
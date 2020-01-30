import React from 'react';

import HeaderLink from '../header-link/header-link.component'
import SmallLogo from '../../assets/AKoS_Logo-Solid-Black.png'
import MenuIcon from '../menu-icon/menu-icon.component'

import HamburgerIcon from '../../assets/hamburger_icon.svg.png';
import Menu from '../menu/menu.component'
import CancelIcon from '../../assets/cancel_icon2.png';


import './header.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handlePress: props.handlePress,
      isMobile: props.isMobile,
      headerTitle: "Overview",
      menu_enabled: false
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isMobile !== this.state.isMobile) {
      this.setState({ isMobile: nextProps.isMobile })
    }
  }

  handleMenu = (viewTitle) => {
    // console.log(event)
    console.log('before: ', this.state.menu_enabled)
    this.setState({ menu_enabled: !this.state.menu_enabled })
  }

  render() {
    return (
      <div className='header sticky'>
        {
          this.state.isMobile ?
            <div className='mobile-header'>
              <div className='small-logo-container'>
                <img className='small-logo' src={SmallLogo} alt="akos-white-logo" onClick={this.state.handlePress} />
              </div>
              {/* <h1 className='mobile-title'>{this.state.headerTitle}</h1> */}
              {
                this.state.menu_enabled
                  ?
                  <div className="menu-container">
                    <Menu handleMenu={this.handleMenu} />
                  </div>
                  :
                  <div className="menu-container">
                    <MenuIcon icon={HamburgerIcon} onClick={this.handleMenu} menuClass="hamburger" />
                  </div>

              }
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
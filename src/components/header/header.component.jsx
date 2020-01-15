import React from 'react';

import HeaderLink from '../header-link/header-link.component'
import SmallLogo from '../../assets/AKoS_Logo-Solid-Black.png'

import './header.styles.scss';

const Header = ({ handlePress }) => (
  <div className='header sticky'>
    <div className='small-logo-with-text'>
      <img className='small-logo' src={SmallLogo} alt="akos-white-logo" onClick={handlePress} />
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

)

export default Header;
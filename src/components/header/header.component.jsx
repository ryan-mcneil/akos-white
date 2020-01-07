import React from 'react';

import HeaderLink from '../header-link/header-link.component'

import './header.styles.scss';

const Header = () => (
  <div className='header sticky'>
    <div className='links'>
      <HeaderLink destination='overview' linkName='Overview' />
      <HeaderLink destination='sustainability' linkName='Sustainability' />
      <HeaderLink destination='section-3' linkName='Section 3' />
      <HeaderLink destination='section-4' linkName='Section 4' />

    </div>
  </div>

)

export default Header;
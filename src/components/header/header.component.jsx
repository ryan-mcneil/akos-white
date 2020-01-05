import React from 'react';

import HeaderLink from '../header-link/header-link.component'

import './header.styles.scss';

const Header = () => (
  <div className='header sticky'>
    <div className='links'>
      <HeaderLink destination='section-1' linkName='Section 1' />
      <HeaderLink destination='section-2' linkName='Section 2' />
      <HeaderLink destination='section-3' linkName='Section 3' />
      <HeaderLink destination='section-4' linkName='Section 4' />

    </div>
  </div>

)

export default Header;
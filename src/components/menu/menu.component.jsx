import React from 'react';

import './menu.styles.scss';
import HeaderLink from '../header-link/header-link.component'

import MenuIcon from '../menu-icon/menu-icon.component'
import CancelIcon from '../../assets/cancel_icon2.png';


const Menu = ({ handleMenu }) => (
  <div className='menu'>
    <MenuIcon icon={CancelIcon} onClick={handleMenu} menuClass="cancel" />
    <div>
      <HeaderLink destination='overview' linkName='Overview' />
      <HeaderLink destination='sustainability' linkName='Sustainability' />
      <HeaderLink destination='section-3' linkName='Section 3' />
      <HeaderLink destination='section-4' linkName='Section 4' />

    </div>

  </div>
)


export default Menu;
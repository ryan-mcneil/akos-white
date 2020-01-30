import React from 'react';

import './menu.styles.scss';
import HeaderLink from '../header-link/header-link.component'

import MenuIcon from '../menu-icon/menu-icon.component'
import CancelIcon from '../../assets/cancel_icon2.png';


const Menu = ({ handleMenu }) => (
  <div className='menu'>
    <MenuIcon icon={CancelIcon} onClick={handleMenu} menuClass="cancel" />
    <div>
      <div className='menu-link'>
        <HeaderLink handleMenu={handleMenu} destination='overview' linkName='Overview' />
      </div>
      <div className='menu-link'>
        <HeaderLink handleMenu={handleMenu} destination='sustainability' linkName='Sustainability' />
      </div>
      <div className='menu-link'>
        <HeaderLink handleMenu={handleMenu} destination='section-3' linkName='Section 3' />
      </div>
      <div className='menu-link'>
        <HeaderLink handleMenu={handleMenu} destination='section-4' linkName='Section 4' />
      </div>

    </div>

  </div>
)


export default Menu;
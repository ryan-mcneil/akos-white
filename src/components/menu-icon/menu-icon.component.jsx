import React from 'react';

import './menu-icon.styles.scss';


const MenuIcon = ({ icon, onClick, menuClass }) => (
  <div className={`icon-wrapper ${menuClass}`} >
    <img src={icon} alt="menu-item" onClick={onClick} />
  </div>

)

export default MenuIcon;
import React from 'react';

import './header-link.styles.scss';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const HeaderLink = ({ destination, linkName }) => (
    <ScrollLink
      to={destination}
      spy={true}
      smooth={true}
      delay={200}
      duration={500}
      className='header-link'
      // containerId="content-container"
      offset={-100}
    >
      {linkName}
    </ScrollLink>
)

export default HeaderLink;
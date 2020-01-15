import React from 'react';

import './header-link.styles.scss';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

class HeaderLink extends React.Component {

  handleSetActive = (event) => {
    var new_id = event+"-link"
    document.getElementById(new_id).classList.add('header-link-selected');
  }

  handleSetInactive = (event) => {
    var new_id = event+"-link"
    document.getElementById(new_id).classList.remove('header-link-selected');
  }

  render() {
    return (
      <ScrollLink
        id={this.props.destination+'-link'}
        to={this.props.destination}
        spy={true}
        smooth='easeInOutQuad'
        delay={200}
        duration={500}
        className='header-link'
        // containerId="content-container"
        offset={-100}
        onSetActive={this.handleSetActive}
        onSetInactive={this.handleSetInactive}
      >
        {this.props.linkName}
      </ScrollLink>
    )
  }
}

export default HeaderLink;
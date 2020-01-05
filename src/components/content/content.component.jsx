import React from 'react';

import Logo from '../../../src/assets/AKoS_Logo-Black_1.png';
import { Element } from 'react-scroll'

import './content.styles.scss';

class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <img src={Logo} className="main-logo" />
        <Element id='section-1'>
          <h1 className="content-item">Content 1</h1>
        </Element>
        <img src={Logo} className="main-logo" />
        <Element id='section-2'>
          <h1 className="content-item">Content 2</h1>
        </Element>
        <img src={Logo} className="main-logo" />
        <Element id='section-3'>
          <h1 className="content-item">Content 3</h1>
        </Element>
        <img src={Logo} className="main-logo" />
        <Element id='section-4'>
          <h1 className="content-item">Content 4</h1>
        </Element>
        <img src={Logo} className="main-logo" />
      </div>

    )
  }
}

export default Content;
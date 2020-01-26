import React from 'react';

import Logo from '../../../src/assets/AKoS_Logo-Black_1.png';
import { Element } from 'react-scroll'

import './content.styles.scss';

import InstagramEmbed from 'react-instagram-embed';

class Content extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className='content' id="content-container">
        <div className='text-container'>
          <div className='slogan'>
            <span>A </span>
            <span className='akos-orange'>fresh</span>
            <span> option for the highly active + Socially conscious among us</span>
          </div>
        </div>
        <div className='instagram-container'>
          <div className='instagram-embed-wrapper'>
            <InstagramEmbed
              url='https://www.instagram.com/p/BpXIGtWlubP/?utm_source=ig_web_copy_link'
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { }}
              onFailure={() => { }}
            />
          </div>
        </div>
        <Element id='overview'>
          <div className='text-container'>
            <div className='sub-heading'>
              <h2 className='akos-orange'>The Problem</h2>
            </div>
          </div>
          <div className='text-container'>
            <div className='problem-list'>
              <p>Easy drinking beers are either filled with calories or taste like pond water</p>
              <p>Wine is loaded with sulfites and doesn’t go down well after river kayaking, trail running, or climbing</p>
              <p>Hard Seltzers, born in factories, with a full paragraph of ingredients.</p>
            </div>
          </div>
          <div className='text-container'>
            <div className='sub-heading'>
              <h2 className='akos-orange'>The Solution</h2>
            </div>
          </div>
          <img src={Logo} className="solution-logo" />
          <div className='text-container'>
            <div className='single-text'>
              <h3>Produced from all natural palm sap &amp; Nothing else.</h3>
            </div>
            <div className='single-text'>
              <h3>Light, refreshing, lightly carbonated.</h3>
            </div>
            <div className='single-text'>
              <h3>Naturally Spirited, just like you</h3>
            </div>
          </div>

          {/* <h1 className="content-item">Content 1</h1> */}
        </Element>
        <Element id='sustainability'>
          <div className='text-container'>
            <div className='heading'>
              <h2>Sustainability</h2>
            </div>
          </div>
          <div className='video-container'>
            <div className='youtube-wrapper'>
              <iframe
              // Only update the "src"
                src="https://www.youtube.com/embed/YxbjrPxuYGw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <div className='text-container'>
            <div className='info-text'>
              <p>Our supply of sap is sourced from
                  mature sugar palms in Cambodia.
                  This process can be continued for
                  many decades throughout the life of
                  the tree and has been practiced by
                locals for over 1000 years.</p>
            </div>
            <div className='info-text'>
              <p>Deforestation</p>
            </div>
            <div className='info-text'>
              <p>Sugar palms grow best in biodiverse
                  areas, not plantations. Our sap comes
                  from hundreds of small, farmer owned
                  farms. This provides a powerful
                  incentive for them to preserve their
                  sugar palms rather than selling them
                as lumber.</p>
            </div>
            <div className='info-text'>
              <p>70% of the Cambodian forests have
                  been destroyed by international
                logging interests.</p>
            </div>
            <div className='info-text'>
              <p>Sugar palm products protect trees.</p>
            </div>
            <div className='info-text'>
              <p>Our sourcing is fair trade certified, &amp;
                  we work with the Cambodian
                  agricultural Co Op to ensure our
                  farmers get a great price while
                providing the worlds finest palm sap.</p>
            </div>
          </div>
          {/* <h1 className="content-item">Content 2</h1> */}
        </Element>
        <Element id='section-3'>
          <h1 className="content-item">Content 3</h1>
          <img src={Logo} className="main-logo" />
        </Element>
        <Element id='section-4'>
          <h1 className="content-item">Content 4</h1>
          <img src={Logo} className="main-logo" />
        </Element>
      </div >

    )
  }
}

export default Content;


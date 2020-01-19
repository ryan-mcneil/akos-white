import React from 'react';

import './mail-chimp.styles.scss'

class MailChimp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <div className="mailchimp">
        {/* <!-- Begin Mailchimp Signup Form --> */}
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
        <style type="text/css">
          {/* /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ }
        </style>
        <div id="mc_embed_signup">
          <form action="https://AkosWhite.us4.list-manage.com/subscribe/post?u=9b11217eba687baa2c208c2ca&amp;id=56017e716f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate >
            <div id="mc_embed_signup_scroll">
              <label className="mc-subscribe-label" for="mce-EMAIL">Subscribe for product updates</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
                style={{
                  "font-color": "#000",
                  "border-color": "#000"
                }}
              />
              <div style={{ position: "absolute", left: -5000 + "px" }} aria-hidden="true">
                <input type="text" name="b_9b11217eba687baa2c208c2ca_56017e716f" tabindex="-1" value="" />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  style={{
                    "background-color": "#000"
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default MailChimp;
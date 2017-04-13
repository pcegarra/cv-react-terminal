import React, { Component } from 'react';
import './Terminal.css';
import './terminal-pages/terminal-pages.css';

import AboutMe from './terminal-pages/about/AboutMe.js';


export default class Terminal extends React.Component {
  render() {
    return (
      <div className="terminal">
        <div id="toolbar">
          <div className="top">
          <div id="lights">
          <div className="light red">
          <div className="glyph">×</div>
          <div className="shine"></div>
          <div className="glow"></div>
          </div>
          <div className="light yellow">
          <div className="glyph">-</div>
          <div className="shine"></div>
          <div className="glow"></div>
          </div>
          <div className="light green">
          <div className="glyph">+</div>
          <div className="shine"></div>
          <div className="glow"></div>
          </div>
          </div>
          <div id="title">
          <div className="folder">
          <div className="tab"></div>
          <div className="body"></div>
          </div>
          CV
          </div>
          <div id="bubble">
          <div className="shine"></div>
          <div className="glow"></div>
          </div>
          </div>
        </div>

        <AboutMe/>

      </div>

    )
  }
}

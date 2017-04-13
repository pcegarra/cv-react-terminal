import React, { Component } from 'react';
import Rnd from './Rnd.js';
import Terminal from './Terminal.js';

const style = {
  textAlign: 'center',
  borderRadius: '5px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { zIndex: 99 };
    setTimeout(() => this.setState({ zIndex: 1000 }), 5000);
  }
  render() {

    //Mobile style
    let currentWidth = window.innerWidth;
    let width = 650;
    if(currentWidth<500){
      width= 300;
    }


    return (
      <Rnd
        ref={c => { this.rnd = c; }}
        initial={{
          x: window.innerWidth / 2 - (width / 2) ,
          y: window.innerHeight / 2 - 250 ,
          width: width,
          height: 500,
        }}
        style={style}
        minWidth={300}
        minHeight={160}
        maxWidth={800}
        maxHeight={600}
        bounds={'parent'}
        zIndex={this.state.zIndex}
      >
        <div className="box">
          <Terminal/>
        </div>
      </Rnd>
    );
  }
}

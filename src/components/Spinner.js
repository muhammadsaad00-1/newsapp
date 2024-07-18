import React, { Component } from 'react';
import cryingGif from './Crying.gif';

class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={cryingGif} alt="Loading..." />
      </div>
    );
  }
}

export default Spinner;

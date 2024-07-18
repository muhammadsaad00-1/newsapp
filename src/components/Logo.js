import React, { Component } from 'react'
import kgf from './Crying.gif'
export class Logo extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={kgf} alt="" />
      </div>
    )
  }
}

export default Logo
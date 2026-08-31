import React, { Component } from 'react'
//nested state-only prof dile err
export default class Abouts extends Component {
    state={
        nm:"kamal",
        roll:8,
        prof:{
            prof1:hshsh,
            prof2:appdev
        }
    }


  
  render() {
    return (
      <div>
        <h1>jwdhwhd</h1>
        <h1>{this.state.prof.prof1 }</h1>
        <button>chnGe value</button>
       
      </div>
    )
  }
}

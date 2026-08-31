import React, { Component } from 'react'
//state js r akta obj.state r modhe kono proprty tkle otake acces nbo 
//cls compont r modhe state use krbo must this keyword use hbe stater nm thn proprty nm
//2nd upai state toiri-fst constructor thkbe (props tkbe) tar modhe supr thn prop
export default class Abouts extends Component {
    state={
        nm:"kamal",
        roll:8
    }

constructor(props){
  super(props);
  this.statename={
    nme:"jndkqd",
    aGe:88
  }
}
  
  render() {
    return (
      <div>
        <h1>jwdhwhd</h1>
        <h1>{this.state.nm }</h1>
        <h1>{this.state.nme }</h1>
      </div>
    )
  }
}

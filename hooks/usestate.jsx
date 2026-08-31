//functional compont a usestate hooks ar sahaje state ctrl krte pri
import React, { Component } from 'react'

export default class Index_1 extends Component {
  constructor(props){
    super(props)
    this.state={
      count :0
    }
  }
  hndlincrement=()=>{
    this.setState({
      count:this.state.count+1
    }

    ) //state r val chnGe krte hle seestate thn tar modhe obj toiri krbo
  }
  render() {
const {count}=this.state
    return (
      <div>
        <h1>count{count}</h1>
        <button onClick={this.hndlincrement}>increment</button>
      </div>
    )
  }
}//akne constructr r modhe state r var initiaze


//functional compont r sahaje state ctrl ata krte hle usestate hooks r sahaje
//setcount dian state ta chnG
import React, { useState } from 'react'

export default function Index_1() {
  const [count,setCount]=useState(0)
   const hndlincrement=()=>{
    setCount(count+1)
  }
  return (
    <div>
       <h1>count:{count}</h1>
      <button onClick={hndlincrement}>increment</button>
    </div>
  )
}
//const thn variable nm like count,var k ctrl krar jono akta func .thn button r sthe event hndler add.
//setcount k use krbo count r val hndl krar jono
//react hooks ract library r modhe akta build in feature jar  modhe onk method ache jeGulo k aksthe react hook ble
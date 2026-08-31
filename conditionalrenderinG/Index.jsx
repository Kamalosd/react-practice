import React, { Component } from 'react'
import HomePaGe from './HomePaGe'//flse je val dilm ai state r uporvitti krejekono akta compont k dekate chai homepG or LoGinpG tadr AGe import krte hbe akne
import LoGinPaGe from './LoGinPaGe'
export default class Index extends Component {
constructor(props){
  super (props)

  this.state={
         isLoGin :false
  }
}

//state r variable isLoGin r upor vitti kre jekono akta compont k dekabo
  render() {
    //usin if else
  if(this.state.isLoGin){
    return <HomePaGe/>
  }

  else{
    return <LoGinPaGe/>
  }



  }
}

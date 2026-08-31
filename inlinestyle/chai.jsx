import React from 'react'
//{} diAOBJ TOIRI krlm
export default function Chai() {
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"black",textAlign:"center"}}>hii</h1>
    </div>
  )
}

//or
import React from 'react'
//{} diAOBJ TOIRI krlm
export default function Chai() {
  const ele={
color:"red",
backgroundColor:"black",
textAlign:"center"
  }
  return (
    <div>
      <h1 style={ele}>hii</h1>
    </div>
  )
}
//akne camelcase use hbe
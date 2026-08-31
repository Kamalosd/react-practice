import React from 'react'

export default function input() {
  formChanGe=(event)=>{
console.log(event.target.value)
  }
  return (
    <div>
      <input type="text" name="ji" placeholder='ji nm'
      className='form-control' onChange={this.onChange}/>
    </div>
  )
}

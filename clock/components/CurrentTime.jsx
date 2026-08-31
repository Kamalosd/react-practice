import React from 'react'

const CurrenTime = () => {
// direct obj dile print hbe an convertkrte hbe 
  let time=new Date()
  return (
    <div>
      current time: {time.toLocaleDateString()}  -{time.toLocaleTimeString()}
    </div>
  )
}

export default CurrenTime

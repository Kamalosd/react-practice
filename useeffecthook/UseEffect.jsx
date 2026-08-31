import React, { useEffect,useState } from 'react'

const UseEffects= () => {
    const [count,setCount]=useState(0)
//usestate r motoi method akne anonymous func takbe ar sahje data fetch,dom update krte pri
// ata functional compont r side effect r  kj kre extrnl sob kj hndl kre.real life r state chnGe krte hle usestae call krbo
  // useEffect(()=>{
  //   document.title="hduw"
  //   //1000 ms=1 sec
  //   setTimeout(()=>{
  //       setCount(count=>count+1)
  //   },1000)
  // },[])  //dependecy reke dile ata akbre cal hbe ata na dile every time call hbe renderinG ar time
 


  return (
    <div>
      <h1>count:{count}</h1>

    </div>
  )
}

export default UseEffects

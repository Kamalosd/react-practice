import React,{useEffect,useState} from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title=`chat count:${count}`
    setTimeout(()=>{
         setCount(count+1)
    },1000)
 
  })
  return (
    <div>
      <p> count:{count}</p>
    </div>
  )
}

export default UseEffect
//count 1 sec por por update

import React,{useEffect,useState} from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    document.title=`chat count:${count}`;
    setCalculation(() => count * 2);

 
  },[count])
  return (
    <div>
      <p> count:{count}</p>
      <p> calculation:{calculation}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  )
}

export default UseEffect
//useeffect k use starte dia poriborton
// jokon react r compont fst time load hoi tokon useefect methodta automatic execute hoi
//ar  2 to part callback func,dependency arry(optional)
import { useEffect } from "react"

function App() {
     
  useEffect(()=>{
    console.log("helo")


  },[20])
// //strictmode enable thkle dev servr a react compont k 2 bar rendr kre
  

//   return (
//     <div>

//     </div>
//   )
// }

// export default App



//useefect a prommise dia api call
import { useEffect, useState } from "react"

function App() {
  //json ta pelm je seta state r modhe set kre rakbo
  let [data,setData]=useState()//response ta store krlm res.json r
     
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>res.json())
    .then(json=>setData(json))

  },[])

  

  return (
    <div>
      
{JSON.stringify(data)}
    </div>
  )
}

export default App

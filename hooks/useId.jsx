import React from 'react'
import { useId } from 'react';
//form a norml id na use kre useid hook use krte pari
const UseId = () => {

//   const usernameId = useId();//ata akta unique id return kre
//   const emailId = useId();//ata akta unique id return kre
//   return (
//     //id ki dbo seta schonai nhi
//    <form>
//     <div>
//       <label htmlFor={usernameId}>username:</label>
//       <input type="text" id={usernameId} name='username'/>
      
//     </div>

//     <div>
//       <label htmlFor={emailId}>email:</label>
//       <input type="email" id={emailId} name='email'/>
//     </div>
//     <button type='submit'>submit</button>
//    </form>
//   )
// }






//barbar useid na use kre akbr e use kre sobai k id dbo

  const id= useId();//ata akta unique id return kre

  return (
    //id ki dbo seta schonai nhi  id ta contact kre dbo
   <form>
    <div>
      <label htmlFor={id+"usernameId"}>username:</label>
      <input type="text" id={id+"usernameId"} name='username'/>
      
    </div>

    <div>
      <label htmlFor={id+"emailId"}>email:</label>
      <input type="email" id={id+"emailId"} name='email'/>
    </div>
    <button type='submit'>submit</button>
   </form>
  )
}






export default UseId;

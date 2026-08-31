import React,{useReducer} from 'react'

const UseReducer = () => {
  const reducer=(state,action)=>{


if(action.type==='INCRE'){
  return state+1;
  }
  if(action.type==='DECRE'){
  return state-1;
  }
}
  const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'INCRE'})}>incre</button><br/>

        <button onClick={()=>dispatch({type:'DECRE'})}>decre</button><br/>
    </div>
  )
}

export default UseReducer
//onlclick a akta obj pass ,key type r val inc








//aro better optimize state manaGement

import React,{useReducer} from 'react'

const UseReducer = () => {

const initialState={
  count:0
}

  const reducer=(state,action)=>{
console.log(state,action);

// if(action.type==='INCRE'){``
//   return state+1;
//   }
//   if(action.type==='DECRE'){
//   return state-1;
//   }
// }
switch (action.type) {
  case "Incre":
    return { count: state.count + 1 };//initial stae akta obj tai state+1 kj krbe bna tai obj lGbe.
    //initial state r val=st r val.initialState holo count 0 take Get krar jonno state.count krte hbe
    
  case "Decre":
    return { count: state.count - 1 };
  case "Reset":
    return { count: 0 };

  default:
   return state;
}
  }

  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'Incre'})}>incre</button><br/>

        <button onClick={()=>dispatch({type:'Decre'})}>decre</button><br/>

        <button onClick={()=>dispatch({type:'Reset'})}>reset</button><br/>
    </div>
  )
}

export default UseReducer
//switch case use krle aro optimize state manaGement krte parbo










import React,{useReducer} from 'react'

const UseReducer = () => {

const initialState={//initial st r multiple proprty
  count:0,
  inc:2,
  dec:3
}

//multiple initial state r jonno spread operator use krte hbe. baki data r jonno jno problm na hoi,baki val as it is only count update

  const reducer=(state,action)=>{
console.log(state,action);

// if(action.type==='INCRE'){``
//   return state+1;
//   }
//   if(action.type==='DECRE'){
//   return state-1;
//   }
// }
switch (action.type) {
  case "Incre"://baki val asit is only count chn
    return { ...state, count: state.count + 1 };//initial stae akta obj tai state+1 kj krbe bna tai obj lGbe.
    //initial state r val=st r val.initialState holo count 0 take Get krar jonno state.count krte hbe
    
  case "Decre":
    return {
      ...state, count: state.count - 1 };
  case "Reset":
    return { ...state,count: 0 };

  default:
   return state;
}
  }


  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'Incre'})}>incre</button><br/>

        <button onClick={()=>dispatch({type:'Decre'})}>decre</button><br/>

        <button onClick={()=>dispatch({type:'Reset'})}>reset</button><br/>
    </div>
  )
}

export default UseReducer
//multiple initial state r jonno spread operator use krte hbe. baki data r jonno jno problm na hoi,baki val as it is only count update
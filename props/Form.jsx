import React, { useState } from 'react'

export default function Form() {
  let [formData,setFormData]=useState({
    fullName:"",
    userName:""
  }); //state var banabo ip r atar connet krbo so value of form a state var add krbo,ip a je val asbe seta state var ar val
  let handleInputChange=(event)=>{
    setFormData((currData)=>{
      return{...currData,[event.target.name]:event.target.value} })//new val 

  }//tarGet mne kon ele chnGe krbo tar val,for r id r val sm hoi.ip element r nm r state var r nm sm hote hbe
let handleSubmit=(event)=>{
  event.preventDefault()
  setFormData({
     fullName:"",//jodi chai submit r somoi val Gulo khali hok ipm teke
    userName:""

  })

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> full nm</label>
        <input placeholder='name' 
        type='text' value={formData.fullName} onChange={handleInputChange}
        id="fullName"
        name="fullName"//nm use kri karon tarGot,nm k acces krar jono
        />
        <label htmlFor="userName"> user nm</label>
        <input placeholder='name' 
        type='text' value={formData.userName} onChange={handleInputChange}
        id="userName"
        name="userName"
        />

        
        <button>submit</button>
      </form>
    </div>
  )
}








//comment pG

import React, { useState } from 'react'

export default function Form() {
  let [formData,setFormData]=useState({
    userName:"",
    remarks:"",
    rating:4
  }); //state var banabo ip r atar connet krbo so value of form a state var add krbo,ip a je val asbe seta state var ar val
  let handleInputChange=(event)=>{
    setFormData((currData)=>{
      return{...currData,[event.target.name]:event.target.value} })//new val 

  }//tarGet mne kon ele chnGe krbo tar val,for r id r val sm hoi.ip element r nm r state var r nm sm hote hbe
let handleSubmit=(event)=>{
  event.preventDefault()
  setFormData({
     userName:"",
    remarks:"",
    rating:4

  })

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> full nm</label>
        <input placeholder='name' 
        type='text' value={formData.userName} onChange={handleInputChange}
        id="userName"
        name="userName"
        /><br/>

        <label htmlFor="rating"> user nm</label>
        <input placeholder='rating' 
        type='number' value={formData.rating}  min={1} max={4}
        onChange={handleInputChange}
        id="rating"
        name="rating"
        />
       <br/>
        
        <label htmlFor="textarea"> txt area</label>
        <textarea value={formData.remarks} onChange={handleInputChange}
        id="remarks"
        name="remarks"
        />

        
        <button>add comment</button>
      </form>
    </div>
  )
}

//custom hook
// hook toiri krbo ak jaiGai use krbo sob jaiGai atake akta component o blte pri
//jodi 500 ta compont atke 500 jaiGai user r data k api teke ante hoi code ta 100 bar write krte hbe but custom hook use krle 1 bar code likhlei,ata barbr use krbo.like cart akta data alada.fetch api ta custom hook r modhe ache.so tar modhe url ta dbo,nm ta asbe json placeholdtr teke
import React, { useEffect ,useState} from 'react'


const UseCustomHook = (url) => {
  const [data, setData] = React.useState(null)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))

  }, [])
  return [data]
   
}

export default UseCustomHook


//custom hook use krle code reuse krte parbo,code clean hbe,logic ta component teke alada thakbe
import React from 'react'
import UseCustomHook from './UseCustomHook'
const ShowCustomHook = () => {
  const [data] = UseCustomHook("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      {data && data.map((item) => {

      
        return <p>{item.name} </p>
      }
      )}
    </div>
  )

}
export default ShowCustomHook

//app.jsx



import React from 'react';

import ShowCustomHook from './ShowCustomHook';


function App() {
  return (
    <div>
<ShowCustomHook/>
    </div>
  )
}

export default App

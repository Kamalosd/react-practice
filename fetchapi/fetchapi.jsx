import React, { useState, useEffect } from 'react'

const Users = () => {
  const [SaveData, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  
  return (
    <div>
      {SaveData.map((data) => (//txt show krte hle mappinkrte hbe
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
  )
}

export default Users
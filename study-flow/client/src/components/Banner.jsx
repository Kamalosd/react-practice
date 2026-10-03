import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto text-center py-6 bg-gray space-y-4'>
      <span className="badge">Badge</span>
      <h1 className='text-white max-w-2xl mx-auto'>Turn big goals into daily task </h1>
      <p className='text-white text-sm'>set a goal </p>

      <div className='flex gap-4 justify-center '>
        <button className="btn btn-success">Get started</button>
        <button className="btn btn-success">see how it works</button>
      </div>

      <div className="card bg-base-100 w-96 mx-auto shadow-sm space-y-4 px-4">
<div className='flex justify-between items-center gap-4'>
    <h2> Todays Progress</h2>
    <p>89% completed</p>
   
</div>
 <progress className="progress  text-green-600 h-10px" value="70" max="100"></progress>
 <ul className='space-y-4'>
  <li className='flex gap-4 items-center border border-green-600 p-2'>
    <span><input type="checkbox" defaultChecked className="checkbox checkbox-success" /></span>solve 5 nath problem
    </li>

 <li className='flex gap-4 items-center border border-green-600 p-2'>
    <span><input type="checkbox" defaultChecked className="checkbox checkbox-success" /></span>solve 5 nath problem
    </li>

     <li className='flex gap-4 items-center border border-green-600 p-2'>
    <span><input type="checkbox" defaultChecked className="checkbox checkbox-success" /></span>solve 5 nath problem
    </li>
   
</ul>
</div>


    </div>
  )
}

export default Banner

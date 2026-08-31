import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex gap-4 my-10 justify-center px-12' >
      <select className='w-55 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option disabled hidden selected>Job role</option>
        <option value="Ios developer">Ios developer</option>
         <option value="Android developer">Android developer</option>
          <option value="Frontend developer">Frontend developer</option>
           <option value="Backend developer">Backend developer</option>
      </select>

           <select className='w-55 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option disabled hidden selected>Job role</option>
        <option value="Ios developer">Ios developer</option>
         <option value="Android developer">Android developer</option>
          <option value="Frontend developer">Frontend developer</option>
           <option value="Backend developer">Backend developer</option>
      </select>

           <select className='w-55 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option disabled hidden selected>Job role</option>
        <option value="Ios developer">Ios developer</option>
         <option value="Android developer">Android developer</option>
          <option value="Frontend developer">Frontend developer</option>
           <option value="Backend developer">Backend developer</option>
      </select>

           <select className='w-55 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option disabled hidden selected>Job role</option>
        <option value="Ios developer">Ios developer</option>
         <option value="Android developer">Android developer</option>
          <option value="Frontend developer">Frontend developer</option>
           <option value="Backend developer">Backend developer</option>
      </select>

      <button className='w-55 bg-blue-400 font-bold py-3 rounded-md'>search</button>
    </div>
  )
}

export default Searchbar

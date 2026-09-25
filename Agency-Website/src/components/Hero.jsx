import React from 'react'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpeg'
import images1 from '../assets/images1.jpeg'
import pic4 from '../assets/pic4.jpg'

const Hero = () => {
  return (
    <div className='w-full py-40'>
     
     <div className='container mx-auto px-6 '>

      <div className='flex items-center mx-auto gap-4 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[25%] mb-12 border border-y-amber-600'>

        <div className='flex items-center -space-x-3'>
          <img className='w-8 h-8 rounded-full ' src={pic2}/>
       
        <img className='w-8 h-8 rounded-full ' src={pic3}/>
       
        <img className='w-8 h-8 rounded-full ' src={images1}/>
      
         </div>
        <span>trusted by 30k+ people</span>
     </div>

     <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
      <span>we help brands grow with</span><br/>
      <span className='text-yellow-300'>performance</span>
      <span>marketing</span>
     </h1>

     <p className='max-w-xl mx-auto text-2xl text-center mb-12'>At our agency ,we take ppride in deliering impactful solutions that combine creativity and technology</p>

     <div className='mb-6 flex items-center justify-center gap-6'>
      <button className='px-6 py-2.5  cursor-pointer font-semibold bg-yellow-200 rounded-full'>contact me</button>
      <button className='px-6 py-2.5 cursor-pointer font-semibold bg-black rounded-full text-white'>digital market</button>
     </div>

<div className='max-w-5xl mx-auto mt-14 rounded-2xl shadow overflow-hidden'>
  <img className="w-full h-full "  src={pic4}/>
</div>

     </div>
    </div>
  )
}

export default Hero

import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full h-screen bg-gray-900 flex flex-col items-start justify-between px-16 py-9 z-50'>
      <div>
        <h3 className='text-white font-semibold mb-10 text-2xl'>Follow On :</h3>
        <div className='flex items-center justify-center gap-10 mb-12'>
          {["WhatsApp", "FaceBook", "LinkedIn","School", "Instagram"].map((item, index)=>(
            <h2 key={index} className='text-white text-md font-semibold cursor-pointer'>{item}</h2>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col justify-between border-t-2 border-gray-800'>
        <div className='w-full h-[70vh] '>
            <h1 className='mb-4 font-extrabold text-[12rem] text-balck cursor-pointer text-white'>Physics<span className='text-7xl text-orange-500'>.co</span></h1>
            <p className='w-1/2 text-gray-500 text-md mt-10'>We are providong something unique, useful and most impoertant fun.By giving students a too to find instant solutions to their studies, We are trying to make every student self-sufficient in practicing and completing their homework</p>
        </div>
        {/* <h1 className='text-[20rem] font-bold text-white w-full'>Footer</h1> */}
        <p className='text-white font-extralight text-sm text-center'>©.All right resierved</p>
      </div>
    </div>
  )
}

export default Footer
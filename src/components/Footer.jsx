import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full lg:h-screen h-[80vh] bg-gray-900 flex flex-col items-start justify-between lg:px-16 sm:px-10 py-9 z-50'>
      <div>
        <h3 className='text-white font-semibold mb-[2.5vh] text-2xl'>Follow On :</h3>
        <div className='flex items-center justify-center gap-10 mb-[3vh]'>
          {["WhatsApp", "FaceBook", "LinkedIn","School", "Instagram"].map((item, index)=>(
            <h2 key={index} className='text-white text-md font-semibold cursor-pointer'>{item}</h2>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col justify-between border-t-2 border-gray-800'>
        <div className='w-full lg:h-[70vh] h-[50vh]'>
            <h1 className='mb-[1vh] font-extrabold text-[17vw] text-balck cursor-pointer text-white'>Physics<span className='text-7xl text-orange-500'>.co</span></h1>
            <p className='lg:w-1/2 w-full text-gray-500 text-md mt-[2vh]'>We are providong something unique, useful and most impoertant fun.By giving students a too to find instant solutions to their studies, We are trying to make every student self-sufficient in practicing and completing their homework</p>
        </div>
        <p className='text-white font-extralight text-sm text-center'>©.All right resierved</p>
      </div>
    </div>
  )
}

export default Footer
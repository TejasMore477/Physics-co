import React from 'react'
function Landing() {
  return (
    <div data-scroll data-scroll-section className='w-full h-[90vh] py-8 px-16 flex items-center justify-center'>
        <div className='relative w-1/2 h-full flex flex-col items-start justify-center'>

           <h1 className='text-white text-7xl text-start w-full font-bold'>Downlode Physics Notes, PYQ's, Question Banks & more...</h1>
           <p className='text-white font-thin mt-3 text-left'>FOR Free!</p>

            <p className='absolute bottom-[5%] text-xs font-extralight text-white'>Scroll Down </p>
        </div>
        <div className='w-1/3 h-full rounded-xl overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='w-full h-full bg-landingImage bg-center bg-cover'></div>
            {/* this image is not copyright free you need to purchase it before hosting website */}
            {/* <img data-scroll data-scroll-section data-scroll-speed="-0.4" className='w-full h-full object-cover object-center'loading='lazy' src="src/assets/images/LVM3_M4,_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_(SLP)_of_SDSC-SHAR,_Sriharikota_03.webp" alt="Landing image" /> */}
        </div>
    </div>
  )
}

export default Landing
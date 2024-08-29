import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  const marquee1 = ["Kinematics","Laws of Motion","Rotational Motion","Units and Dimensions","Oscillations","Gravity","Fluids Mechanics","Kinetic Theory of Gases"]
  const marquee2 = ["Wave Optics","Atoms and Nuclei","Atoms and Nuclei","Ray Optics","Current Electricity","Alternating Current","Semiconductors","Dual Nature of Radiation"]
 
  let marqueeElem = Array.from({length:4}).map((ele,index)=>(
  <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:20}} key={index} className=' text-xl font-light font-title pr-10 flex items-center gap-7'>{marquee1.map((elem,index)=><h3 key={index}>{elem}</h3>)}</motion.h1>
 ))

 let marqueeElem2 = Array.from({length: 4}).map((ele, index) => (
  <motion.h1 
    initial={{ x: "-100%" }} 
    animate={{ x: "0%" }} 
    transition={{ ease: "linear", repeat: Infinity, duration: 20 }} 
    key={index} 
    className='text-xl font-light font-title pr-10 flex items-center gap-7'
  >
    {marquee2.map((elem, index) => <h3 key={index}>{elem}</h3>)}
  </motion.h1>
));


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full pt-32 data-scroll data-scroll-section data-scroll-speed=".1"'>
        <p className='text-gray-600 mb-3 px-16 text-xl'>Class 11th important chapters :</p>
        <div className=' border-b-2 border-t-2 border-gray-500  overflow-x-hidden overflow-y-hidden text-white flex whitespace-nowrap leading-none py-3'>
          {marqueeElem}
        </div>
        <p className='text-gray-600 px-16 text-xl my-3 '>Class 12th important chapters :</p>
        <div className='border-b-2 border-t-2 border-gray-500  overflow-x-hidden overflow-y-hidden text-white flex whitespace-nowrap leading-none py-3'>
          {marqueeElem2}
        </div>
    </div>
  )
}

export default Marquee
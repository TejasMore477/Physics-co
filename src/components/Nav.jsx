import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <motion.div 
    className='w-full h-[10vh] py-4 px-16 bg-black text-white flex items-center justify-between overflow-hidden'
    >
        <h1 className='font-extrabold text-4xl text-balck cursor-pointer'>Physics<span className='text-2xl text-orange-500'>.co</span></h1>
        <div className='flex items-center justify-center gap-10'>
        {['Class 11th','Class 12th'].map((item, index)=>(
            <Link to={index===0? '/class11':'/class12'} key={index} className=' font-light cursor-pointer hover:border-b-[1px] ease-in-out duration-300 hover:border-black'>{item}</Link>
        ))}

        </div>
    
    </motion.div>
  )
}

export default Nav
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

function Nav() {
  return (
    <motion.div 
    className='w-full h-[10vh] py-4 lg:px-16 sm:px-10 px-4 text-white flex items-center justify-between overflow-hidden'
    >
        <Link to={'/'} className='font-extrabold sm:text-3xl text-2xl text-balck cursor-pointer'>Physics<span className='text-2xl text-orange-500'>.co</span></Link>
        <div className='flex items-center sm:justify-center sm:gap-10'>
        {['Class 11th','Class 12th'].map((item, index)=>(
            <Link to={index===0? '/class11':'/class12'} key={index} className=' font-light cursor-pointer hidden sm:block hover:border-b-[1px] ease-in-out duration-300 hover:border-black'>{item}</Link>
        ))}
          <span className='text-xl sm:hidden'><TiThMenu /></span>
        </div>
    
    </motion.div>
  )
}

export default Nav
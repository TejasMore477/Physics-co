import React from 'react';
import Marquee from './Marquee';
import { LuArrowRight } from "react-icons/lu";

function SecondPage() {
  return (
    <div data-scroll data-scroll-section className='w-full h-screen bg-black text-white overflow-hidden'>
        <Marquee />
        <div className=' px-16 w-full mt-8 h-[60vh] relative flex felx-col items-end justify-between'>
            <div className='flex items-center gap-8 w-full group '>
                <h2 className='text-[16rem] tracking-tighter group-hover:text-orange-500 cursor-pointer ease-in duration-300'>Dowlode</h2>
                <div className='size-[16rem] rounded-full bg-orange-500 group-hover:bg-white cursor-pointer ease-in duration-300 grid place-content-center overflow-hidden'>
                  <span className='text-[13rem] text-black group-hover:rotate-[45deg] ease-in duration-300'><LuArrowRight /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage
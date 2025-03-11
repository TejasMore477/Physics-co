import React from 'react';
import Marquee from './Marquee';
import { LuArrowRight } from "react-icons/lu";

function SecondPage() {
  return (
    <div data-scroll data-scroll-section className='w-full h-fit bg-black text-white overflow-hidden'>
        <Marquee />
        <div className='lg:px-16 sm:px-10 w-full lg:mt-8 md:mb-8 lg:h-[60vh] md:h-[50vh] relative flex felx-col items-end justify-between'>
            <div className='flex items-center gap-8 w-full group '>
                <h2 className='text-[16vw] md:text-[14vw] tracking-tighter group-hover:text-orange-500 cursor-pointer ease-in duration-300'>Dowload</h2>
                <div className='size-[14rem] lg:size-[12rem] md:size-[10rem] rounded-full bg-orange-500 group-hover:bg-white cursor-pointer ease-in duration-300 grid place-content-center overflow-hidden'>
                  <span className='text-[10rem] lg:text-[9rem] md:text-[7rem] text-black group-hover:rotate-[45deg] ease-in duration-300'><LuArrowRight /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage
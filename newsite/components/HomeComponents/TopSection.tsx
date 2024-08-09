import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import BlackBanner from './BlackBanner';

export default function TopSection() {
  return (
    <div className='flex flex-col items-center  justify-center md:pt-24 pt-16 2xl:w-[1200px] w-full'>
<h1 className='font-medium md:text-7xl sm:text-5xl text-3xl text-center md:leading-[90px]'>CAPTURE YOUR EVERY <br />
MOMENT</h1>
<div className='md:flex hidden items-center justify-between w-[65vw] 2xl:w-[1100px]'>
<img src="/image2.jpg" alt="" className='h-52 w-60 object-cover -rotate-12'/>
<div className='flex flex-col items-center justify-center mt-20'>
    <p className='font-medium text-base w-[80%] text-center md:block hidden'>Capture all those memories with friends
    and family in an instant </p>
    <button className='bg-black p-2 flex mt-16 items-center gap-2 justify-center text-white text-sm px-5 rounded-lg'>
Learn More
<FaLongArrowAltRight className='text-white text-2xl'/>
</button>
</div>
<img src="/image1.jpg" alt="" className='h-52 w-60 object-cover rotate-12'/>

</div>
<div className='md:hidden flex  flex-col justify-center items-center mt-6'>
<img src="/image1.jpg" alt="" className='h-40 w-60 object-cover '/>
<p className='font-medium text-sm w-[80%] text-center mt-3'>Capture all those memories with friends
and family in an instant </p>
<button className='bg-black p-2 flex mt-5 items-center gap-2 justify-center text-white text-sm px-5 rounded-lg'>
Learn More
<FaLongArrowAltRight className='text-white text-2xl'/>
</button>
</div>
<BlackBanner/>

    </div>
  )
}

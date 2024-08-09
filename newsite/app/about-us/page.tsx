import FeedBacks from '@/components/AboutComponent/FeedBack'
import Members from '@/components/AboutComponent/Members'
import OurFooter from '@/components/Footer'
import React from 'react'

export default function AboutUs() {
  return (
    <div >
<div className='w-full h-[300px] bg-[#F5F5F5] mt-5 flex items-center justify-center'>
<h1 className='font-bold text-4xl'>About Us</h1>
</div>
<div className='flex md:flex-row flex-col justify-between items-center mt-16 lg:px-32 px-5 '>
<div className='flex flex-col md:w-[30vw] w-full'>
<h1 className='font-semibold text-2xl'>OUR STORY</h1>
<p className='pt-5'>We are a team of passionate and dedicated professional photographers who have been capturing the world through our lenses for the past few years. Our journey began with a shared love for photography and a commitment to telling stories through our images.</p>
</div>
<div>
    <img src="/about.jpg" alt="" className='h-[300px] md:w-[500px] w-[90vw] object-cover md:mt-0 mt-5'/>
</div>
</div>
<Members/>
<FeedBacks/>
<OurFooter/>
    </div>
  )
}

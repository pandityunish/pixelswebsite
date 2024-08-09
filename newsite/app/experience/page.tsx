import FeedBacks from '@/components/AboutComponent/FeedBack'
import HighlightsComponent from '@/components/ExperienceComponent/HighlightsComponent'
import ImageSection from '@/components/ExperienceComponent/ImageSection'
import OurFooter from '@/components/Footer'
import React from 'react'

export default function Experienc() {
  return (
    <div className='mt-10'>
        <ImageSection image='/aboutus.jpg' subtitle='Home/Experience' title='Experience'/>
        <div className='flex lg:flex-row flex-col justify-between items-center mt-16 md:gap-20 gap-5 w-full lg:px-32 p-5'>
<img src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[350px] w-[600px] object-cover'/>
<div className='flex flex-col  md:w-[30vw] w-full'>
<h1 className='text-3xl font-semibold'>Experience</h1>
<p className='mt-3'>We are a team of passionate and dedicated professional photographers who have been capturing the world through our lenses for the past few years. Our journey began with a shared love for photography and a commitment to telling stories through our images.</p>

</div>
    </div>
    <HighlightsComponent/>
    <FeedBacks/>
<OurFooter/>
    </div>
  )
}

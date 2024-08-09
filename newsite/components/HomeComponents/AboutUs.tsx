import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function AboutUs() {
  return (
    <div className='flex lg:flex-row flex-col justify-start mt-16 md:gap-20 gap-5 w-full lg:px-32 p-5'>
<img src="./aboutus.jpg" alt="" className='h-[450px] w-[600px] object-cover'/>
<div className='flex flex-col'>
<h1 className='text-3xl font-semibold'>ABOUT US</h1>
<p className='mt-3'>We are a team of passionate and dedicated professional photographers who have been capturing the world through our lenses for the past few years. Our journey began with a shared love for photography and a commitment to telling stories through our images.</p> <br /> 
<p>At Pixels, we believe that every photograph has a story to tell. Whether it's a candid moment at a wedding, the intricate details of a product, or the serene beauty of a landscape, we strive to capture the essence of every scene we encounter. Our diverse team brings a wealth of experience and a unique perspective to every project, ensuring that each photo we take is a masterpiece.</p>
<button className='bg-black p-2 flex mt-5 w-[150px] items-center gap-2 justify-center text-white text-sm px-5 rounded-lg'>
Learn More
<FaLongArrowAltRight className='text-white text-2xl'/>
</button>
</div>
    </div>
  )
}

import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function OurFooter() {
  return (
    <div className='lg:px-10 xl:px-32 md:px-10 px-4  bg-gradient-to-t pt-7 bg-black font-poppins text-white'>
    <div className=' flex md:justify-between md:flex-row flex-col justify-evenly  md:items-center items-start  mt-4'>
      <div className='flex md:hidden justify-between w-full'>

      
    <div className=' md:w-[30%] w-[200px] md:hidden flex flex-col items-start '>
      <div className="flex gap-3 items-center cursor-pointer">
          <p className='font-bold text-2xl text-white'>Pixels</p>
            <p className="font-semibold text-base text-primary">Pixles</p>
          </div>
<p className='w-full font-light text-xs md:mt-14 mt-4 text-start '>At Pixels, we believe that every photograph has a story to tell. Whether it's a candid moment at a wedding, the intricate details of a product, or the serene beauty of a landscape, </p>
<div className='flex gap-3 justify-start items-start lg:mt-0 pt-6' >
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaFacebook/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaInstagram/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaYoutube/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaXTwitter/>
       </div>
      </div>
      </div>
      <div>
      <h1 className='font-bold text-xl lg:mt-0 md:text-start text-start'>About</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 items-start  text-sm lg:text-base font-normal '>
     <Link href="/homepage">Home</Link>
      <Link href="/about-us">About</Link>
      <Link href="/news">Blogs</Link>
      <Link href="/">Help & Support</Link>
     </div>
      </div>
      </div>
      <div className='flex md:hidden justify-between mt-10'>
      <div>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-start'>Company</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 items-start text-sm lg:text-base font-normal '>
     <Link href={"/"} className='cursor-pointer'>How we work</Link>
      <Link href={"/"} className='cursor-pointer'>Terms of service</Link>
      <Link href="/join-now" className='cursor-pointer'>Pricing</Link>
     
     </div>
      </div>
      <div className='md:w-[20%] w-[50%]'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-start'>Contact us</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-start'>
     <p className='md:text-start text-start'>P8P6+29Q, Shiva Mandir, Ring Rd,Kathmandu 44600</p>
<p>+1 202-918-2132</p>
<p>gmail@gmail.com</p>
     </div>
      </div>
      </div>
     <div className=' md:w-[30%] w-[200px] md:flex hidden flex-col items-start '>
      <div className="flex gap-3 items-center cursor-pointer">
          
            <p className="font-semibold text-base text-primary">Pixels</p>
          </div>
<p className='w-full font-light text-xs md:mt-14 mt-4 text-start '>At Pixels, we believe that every photograph has a story to tell. Whether it's a candid moment at a wedding, the intricate details of a product, or the serene beauty of a landscape, </p>
<div className='flex gap-3 justify-start items-start lg:mt-0 pt-6' >
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaFacebook/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaInstagram/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaYoutube/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer'>
       <FaXTwitter/>
       </div>
      </div>
      </div>
      <div className='md:block hidden'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>About</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start  text-sm lg:text-base font-normal items-center'>
     <Link href="/homepage">Home</Link>
      <Link href="/about-us">About</Link>
      <Link href="/news">Blogs</Link>
      <Link href="">Help & Support</Link>
     </div>
      </div>
     
      <div className='md:block -mt-6 hidden  '>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>Company</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center'>
     <Link href="/" className='cursor-pointer'>How we work</Link>
      <Link href="/" className='cursor-pointer'>Terms of service</Link>
      <Link href="/join-now" className='cursor-pointer'>Pricing</Link>
      <p></p>
     </div>
      </div>
      <div className='md:w-[20%] w-[50%] md:block hidden xl:-mt-5 mt-0'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>Contact us</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center'>
     <p className='md:text-start text-center'>P8P6+29Q, Shiva Mandir, Ring Rd,Kathmandu 44600</p>
<p>+1 202-918-2132</p>
<p>gmail@gmail.com</p>
     </div>
      </div>
     
      
     
    
    </div>
      <p className='mt-10 text-center font-medium md:text-base text-sm'>Copyright © Pixels Will 2022. All Right Reserved</p>
      </div>
  )
}
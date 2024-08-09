import Link from 'next/link';
import React from 'react'
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className='flex justify-between items-center md:px-16 px-5 pt-5 '>
<p className='text-3xl font-bold'>Pixels</p>
<div className=' space-x-5 justify-center items-center md:flex hidden'>
<Link href={"/"}> <p className='cursor-pointer hover:font-bold'>Home</p></Link>

<Link href={"/about-us"}> <p className='cursor-pointer hover:font-bold'>About Us</p></Link>
<Link href={"/experience"}> <p className='cursor-pointer hover:font-bold'>Experience</p></Link>
<Link href={"/gallery"}> <p className='cursor-pointer hover:font-bold'>Gallery</p></Link>
</div>
<Link href={"/contact-us"}> <button className='bg-black p-2  items-center md:flex hidden justify-center text-white text-sm px-5 rounded-lg'>
Contact Us
</button></Link>
<IoMenu className='md:hidden block text-2xl '/>
    </div>
  )
}

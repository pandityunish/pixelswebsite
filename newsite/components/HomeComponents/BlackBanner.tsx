import React from 'react'
import { FaStar } from "react-icons/fa";

export default function BlackBanner() {
  return (
    <div className='w-full bg-black md:flex flex-wrap items-center justify-center md:py-10 py-4 md:justify-between mt-16 p-4 px-10'>
<div className='text-white flex items-center justify-center gap-2'>
<FaStar/>
<p>PRO PHOTOGRAPHERS</p>
</div>
<div className='text-white flex items-center justify-center gap-2'>
<FaStar/>
<p>BEST PHOTOGRAPHERS</p>
</div>
<div className='text-white flex items-center justify-center gap-2'>
<FaStar/>
<p>GREAT PHOTOGRAPHERS</p>
</div>
<div className='text-white flex items-center justify-center gap-2'>
<FaStar/>
<p>PRO PHOTOGRAPHERS</p>
</div>
    </div>
  )
}

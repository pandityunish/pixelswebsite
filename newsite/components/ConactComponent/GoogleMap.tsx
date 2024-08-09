import React from 'react'
export default function GoogleMap() {
  return (
    <div className=' bg-white flex-col items-center justify-center my-20'>
        <div className='p-10 flex-col flex justify-center items-center'>
        <p className='font-bold text-black lg:text-5xl text-xl text-center'>Find Us on Google Maps</p>
<p className='text-[#6C6B6B] text-sm text-center w-[70vw] mt-4'>Read what our customers have to say about our services and how we have helped them expand their businesses.Read what our customers have to say about our services and how we have  helped them expand their businesses.
</p>
        </div>

<div className='flex items-center justify-center'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.92415252337!2d85.34653887474421!3d27.688739026313268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198bf9bd6c7d%3A0xb9e9193ddf9eda4f!2sISMT%20College!5e0!3m2!1sen!2snp!4v1722735957318!5m2!1sen!2snp" width="600" height="450"   loading="lazy" ></iframe>

</div>
{/* <img src={image} alt="" /> */}
    </div>
  )
}
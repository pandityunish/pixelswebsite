import React from 'react'

interface ImageSection {
  title:string,
  subtitle:string,
 image:string, // You can replace 'any' with a more specific type if you know the structure of 'slides'
}
const ImageSection: React.FC<ImageSection>= ({title,image,subtitle})=> {
  return (
    <div className='relative font-outfit'>
    <img src={image} alt="" className='h-[55vh] w-full object-cover'/>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className='absolute left-1/2 mt-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
<p className='font-bold lg:text-5xl text-4xl text-white text-center '>{title}  </p>
<p className='text-white text-center pt-2 md:w-[40vw] w-[90vw]'>{subtitle}
</p>
    </div>
    </div>
  )
}
export default ImageSection;

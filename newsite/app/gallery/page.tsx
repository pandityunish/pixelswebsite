
import ImageSection from '@/components/ExperienceComponent/ImageSection'
import OurFooter from '@/components/Footer';
import StaggeredGridView from '@/components/HomeComponents/ImageView';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci";

export default function Gallery() {

  return (
    <div className='mt-5'>
        <ImageSection image='https://images.unsplash.com/photo-1579781354186-012d7e850ad7?q=80&w=2317&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' subtitle='Home/Gallery' title='Gallery'/>
        <div className='flex items-center justify-center mt-10 gap-10'>
        <input type="text" placeholder='Search Here' className='w-[50vw] shadow-2xl rounded-xl p-5'/>
<div className='p-5 shadow-2xl rounded-xl flex gap-2 items-center justify-center px-8'>
<p>Filter</p>
<CiFilter/>
</div>
        </div>
        {/* <div className='my-20 mx-auto flex flex-col items-center justify-center'> */}
        <StaggeredGridView  />
        {/* </div> */}
        {/* <OurFooter/> */}
    </div>
  )
}

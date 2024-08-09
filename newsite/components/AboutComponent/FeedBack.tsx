"use client"
import React, { useEffect, useState } from 'react'
import InfiniteSlider from './Slider'
import axios from 'axios';

export default function FeedBacks() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('http://localhost:5001/reviews');
        setPictures(response.data);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
   

  }, []);
    const sliders=[
{"name":"Yunish","image":"https://images.unsplash.com/photo-1475669913832-fd187510b578?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","address":"Kathmandu","description":"This is the description"},
{"name":"Yunish","image":"https://images.unsplash.com/photo-1475669913832-fd187510b578?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","address":"Kathmandu","description":"This is the description"},
{"name":"Yunish","image":"https://images.unsplash.com/photo-1475669913832-fd187510b578?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","address":"Kathmandu","description":"This is the description"},
    ]
    
  
    
  return (
    <div className='mx-auto w-[100%] px-3 xl:px-32 md:px-16 md:mb-40 mb-16 md:mt-20 mt-10'>
           <h1 className='font-normal md:text-5xl text-3xl py-4 text-center font-poppins'> <span className='text-secondary font-bold'>What </span>our Client Say</h1>
           <p className='md:text-base text-xs font-poppins font-normal text-center md:px-10'>Here are some reviews that our clients gives about our photography.</p>

       <InfiniteSlider slides={pictures}/>
    </div>
  )
}
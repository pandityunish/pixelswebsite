"use client"
import OurFooter from "@/components/Footer";
import AboutUs from "@/components/HomeComponents/AboutUs";
import BlackBanner from "@/components/HomeComponents/BlackBanner";
import InfiniteSlider from "@/components/HomeComponents/ImageSlider";
import TopSection from "@/components/HomeComponents/TopSection";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('http://localhost:5001/pictures');
        setPictures(response.data);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
   

  }, []);
  const images:Array<String>=["https://images.unsplash.com/photo-1721297015695-43027e98a178?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1721160151710-0197b083c7e5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722110650001-13a5025b198c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
    <TopSection/>
    <AboutUs/>
    <div className='mx-auto w-[100%] px-3 xl:px-32 py-20 md:px-16 md:mb-40 mb-16 md:mt-20 mt-10 bg-black'>
      <p className="text-5xl font-medium text-white text-center ">Our Capture</p>
    <InfiniteSlider slides={pictures}/>

    </div>
    <OurFooter/>

    </main>
  );
}

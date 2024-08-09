'use client';
// InfiniteSlider.js
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";

interface InfiniteSliderProps {
    slides: any[]; // You can replace 'any' with a more specific type if you know the structure of 'slides'
}
const InfiniteSlider: React.FC<InfiniteSliderProps>  = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ref = useRef(null);
 

  
  const handlePrevClick = () => {
    // Your custom logic before moving to the previous slide
    console.log('Previous arrow clicked!');
   
    ref.current!.slickPrev();
  };

  const handleNextClick = () => {
    // Your custom logic before moving to the next slide
    console.log('Next arrow clicked!');
    // originalOnClick();
    ref.current!.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    arrows:false,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024, // Large screens
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Medium screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // Small screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    beforeChange: ( newIndex:number) => setCurrentSlide(newIndex),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative mx-auto mt-10">
      <Slider {...settings} ref={ref}>
        {slides.map((slide:string, index:number) => (
          <div key={index} className="p-5">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-[350px] object-cover rounded-xl" />
            
          </div>
        ))}
      </Slider>

      <div className='absolute flex items-center justify-center bg-white top-[50%] transform -translate-x-1/2 -translate-y-1/2 md:-right-14 -right-7 bg-secondary md:h-[60px] h-[40px] w-[40px] md:w-[60px] rounded-full' onClick={()=>{
        handleNextClick()
      }}>
<TiArrowRightThick className='text-black text-3xl'/>
      </div>
      <div className='absolute flex items-center justify-center bg-white  top-[50%] transform -translate-x-1/2 -translate-y-1/2 md:-left-1 left-3 bg-secondary md:h-[60px] h-[40px] w-[40px] md:w-[60px] rounded-full' onClick={()=>{
        handlePrevClick()
      }}>
<TiArrowLeftThick className='text-black text-3xl'/>

      </div>
    
    </div>
  );
};

export default InfiniteSlider;

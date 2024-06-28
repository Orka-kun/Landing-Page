"use client"
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import Image from 'next/image';

const SliderComponent = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div>
      <div className="keen-slider" ref={sliderRef}>
        <div className="keen-slider__slide number-slide1">
          <Image src={slide1} alt="Slide 1" className="w-full h-1/3 object-cover"/>
          
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={slide2} alt="Slide 2" className="w-full h-1/3 object-cover"/>
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={slide3} alt="Slide 3" className="w-full h-1/3 object-cover"/>
        </div>
      </div>

    </div>
  );
};

export default SliderComponent;

import React from 'react'
import Slider from 'react-slick'

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='relative h-[500px] before:bg-gradient-to-r   before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>   
      <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover ' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg'/>
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg'/>
        </div>
      </Slider>
      <div className='container flex-1 items-center mt-28 absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
            <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'/>
            <h3 className='mt-10 text-4xl font-semibold text-white' >
              Dakikalar içinde <br/>kapınızda<br/>
            </h3>
      </div >

    </div>
  )

}

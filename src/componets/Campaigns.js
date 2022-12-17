import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Banners from '../api/banners.json'
import Title from './ui/Title';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className='text-brand-color absolute top-1/2 -right-6 -translate-y-1/2' onClick={onClick}>
      <IoIosArrowForward></IoIosArrowForward>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className='text-brand-color absolute top-1/2 -left-6 -translate-y-1/2' onClick={onClick}>
      <IoIosArrowBack></IoIosArrowBack>
    </button>
  );
}


export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false

        }
      }
    ]

  };
  return (
    <div className='container mx-auto '>
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
      <Slider className='md:-mx-2' {...settings}>
        {banners.length && banners.map((banner) => (
          <div key={banner.id}>
            <picture className='block md:px-2'>
              <img className='md:rounded-lg' src={banner.image}></img>
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  )
}

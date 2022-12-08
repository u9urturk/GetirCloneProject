import React, { useState } from 'react'
import Slider from 'react-slick'
import ReactFlagsSelect from 'react-flags-select';
import { useWindowWidth } from '@react-hook/window-size';

export default function HeroSection() {
  const [selected, setSelected] = useState('TR');
  const windowWith = useWindowWidth()
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:500,
    autoplaySpeed:3500

  };

  return (
    <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r   before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
      {windowWith >= 768 && <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover ' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg' />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg' />
        </div>
      </Slider>}
      <div className='container flex justify-between items-center relative md:absolute top-0 left:0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 md:px-12'>
        <div className='hidden md:block'>
          <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' />
          <h3 className='mt-8 text-4xl  font-semibold text-white' >
            Dakikalar içinde <br />kapınızda<br />
          </h3>
        </div>
        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
          <h4 className='text-brand-color mb-4  text-center font-semibold'>Giriş yap veya kayıt ol</h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className='flex-1 relative block'>
                <input required className='h-14 px-4 border-2 border-gray-200 rounded transition-colors hover:border-brand-color pt-1  w-full peer'></input>
                <span className='absolute  top-0 left-0 h-full px-4 flex items-center text-base text-gray-600 peer-valid:h-7 peer-valid:text-brand-color peer-valid:text-xs transition-all peer-focus:h-7 peer-focus:text-brand-color peer-focus:text-xs'>Telefon Numarası</span>
              </label>
            </div>
            <button className='bg-yellow-brand-color h-12 mt-6 text-brand-color hover:text-yellow-brand-color hover:bg-brand-color transition-colors   w-full flex items-center justify-center rounded-md text-sm font-semibold'>
              Telefon ile devam et
            </button>
            <hr className='"h-[1px] bg-gray-300 my-2'/>
          </div>
        </div>

      </div >

    </div>
  )

}

import React, { useEffect, useState } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';
import Title from './ui/Title';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    //istek ! 
    setCategories(categoryData)
    //setTimeout(()=> setCategories(categoryData),1000)
  },[])
  
  return ( 
    <div className='bg-white py-4'>
      <div className='container mx-auto' >
          <div className='mx-4 md:mx-0'>
          <Title>Kategoriler</Title>
          </div>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
              {/*!categories.length && 'Yükleniyor'*/}
              {categories && categories.map((category,index)=> 
              <Category key={index} category={category}></Category>)}
          </div>
      </div>
    </div>
  )
}

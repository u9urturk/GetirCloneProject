import React, { useEffect, useState } from 'react'
import Title from './ui/Title'
import Products from '../api/products.json'
import ProductItem from './ui/ProductItem';

export default function Favorites() {
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    setProducts(Products);
  },[])


  return (
    <div>
      <div className='mx-4 md:mx-0'>
      <Title>Favoriler</Title>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 gap-0.1rounden-lg overflow-hidden'>
        {products.length && products.map((product,index)=> 
        <ProductItem key={index} product={product}></ProductItem>
        )}
      </div>
    </div>
  )
}

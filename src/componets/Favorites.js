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
      <Title>Favoriler</Title>
      <div className='grid grid-cols-8 gap-0.1rounden-lg overflow-hidden'>
        {products.length && products.map((product,index)=> 
        <ProductItem key={index} product={product}></ProductItem>
        )}
      </div>
    </div>
  )
}

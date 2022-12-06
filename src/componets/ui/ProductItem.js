import React from 'react'
import {FiPlus} from 'react-icons/fi'

export default function ProductItem({ product }) {
    return (
        <div className='bg-white relative flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3'>
            <button className=' absolute top-3 right-3 bg-white w-8 h-8 transition-all text-brand-color  hover:bg-brand-color  hover:text-yellow-brand-color flex items-center justify-center border border-gray-200 rounded-lg'>
                <FiPlus  size={16}></FiPlus>
            </button>
            <img src={product.image} alt={product.title}></img>
            <div className=' text-brand-color'>{product.price}</div>
            <div className=' text-gray-900'>{product.title}</div>
            <div className='text-gray-400'>{product.alt}</div>
        </div>
    )
}

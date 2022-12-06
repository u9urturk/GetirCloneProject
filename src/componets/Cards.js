import React, { useEffect, useState } from 'react'
import cardsData from '../api/cards.json'
export default function Cards() {
  const [cards , setCards] = useState([]);
  
  useEffect(()=>{
    setCards(cardsData);
  },[]);

  return (
    <div className='grid grid-cols-3 gap-x-4'>
      {cards.length && cards.map(card=>(
        <div className='bg-white p-14 rounded-lg shadow-xl flex flex-col items-center justify-center text-center   '>
          <img className='' src={card.image}></img>
          <h6 className='text-lg text-brand-color mt-2 mb-2 font-bold'>{card.title}</h6>
          <p className='text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

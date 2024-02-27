import React from 'react'

export const Items = ({ id, cover, name, desc, price, qty, category, totalPrice }) => {
  return (
    <div className='flex flex-row w-full m-1' key={id}>
      <div className='flex flex-row'> 
        <div>
          <div className='relative size-16'>
            <img className="w-full h-auto rounded-md" src={cover} alt="" />
            <button className='text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> X </button>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col '>
        <p>{name}</p>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col '>
          <label htmlFor='' className='text-xs text-zinc-400'>Unite price:  $ {price}</label>
          <div className='flex text-white text-xs'>
            <button className='bg-zinc-800 w-5 rounded-l'>+</button>
            <button className='bg-zinc-800 w-5'>10</button>
            <button className='bg-zinc-800 w-5 rounded-r'>-</button>
          </div>
        </div>
          <div className='mr-5 text-xs'>
            <p>${totalPrice}</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

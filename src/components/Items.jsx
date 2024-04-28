import React from 'react'
import { addCart, removeItem } from '../store/slice/cartSlice'
import { useDispatch } from 'react-redux'

export const Items = ({ id, cover, name, price, qty, totalPrice }) => {

  const round = totalPrice.toFixed(2);
  
  
  const dispatch = useDispatch()

  return (
    <div className='flex flex-row w-full m-1' key={id}>
      <div className='flex flex-row'> 
        <div>
        <div className='relative w-16 h-16'>
          <img className="w-full h-full object-cover object-center" src={cover} alt="" />
          <button className='absolute top-0 left-0 w-full h-full bg-gray-800 text-white text-xs flex justify-center items-center rounded opacity-0 hover:opacity-100 transition-opacity duration-300'> X </button>
        </div>
        </div>
      </div>
        <div className='w-full flex flex-col '>
          <p className='m-2'>{name}</p>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col '>
            <label htmlFor='' className='text-xs m-1 text-zinc-400'>
              Unite price:  $ {price}
            </label>
          <div className='flex text-white text-xs pt-1'>
            <button className='bg-black w-5 rounded-l'
            onClick={()=> dispatch(removeItem(id))}
            >
              -
            </button>

            <button className='bg-black w-5'>
              {qty}
            </button>

            <button className='bg-black w-5 rounded-r'
            onClick={() => dispatch(addCart({id, name, price}))}

            >
              +
              </button>
          </div>
        </div>
          <div className='mr-5 text-md'>
            <p> $ {round} </p>  
          </div>
        </div>
      </div>
    </div>
  )
}

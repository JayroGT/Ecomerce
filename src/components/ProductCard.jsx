import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/slice/cartSlice'


export const ProductCard = (
  {
    id,
    name,
    price,
    qty,
    totalPrice,
    cover,
  }
) => {

  const dispatch = useDispatch()


  return (

    <div className='p-4 m-2 h-36 w-11/12 rounded-xl shadow-md border border-gray-200'>
      <div className="flex w-full h-full justify-between items-center bg-white">
        <img
          className="p-1 rounded-t-lg w-1/4 h-full" // Cambié w-1/3 a w-1/4 para reducir el tamaño
          src={cover}
          alt="product image"
        />
        <div className="w-1/3 text-center flex flex-col justify-center">
          <h5 className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
            {name}
          </h5>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
        <button
          className="text-white h-6 w-1/4 bg-blue-400 hover:bg-blue-500 active:bg-blue-700 rounded-lg text-xs text-center flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() =>
            dispatch(addCart({ id, price, qty, name, cover, totalPrice }))
          }
        >
          Add to cart
        </button>
      </div>
    </div>


  )
}

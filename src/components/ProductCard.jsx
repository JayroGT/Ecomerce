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
    <div className='w-auto p-3'>
        <div className="flex flex-col w-auto p-10 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center">
                <img className="p-1 rounded-t-lg w-40 h-full size-10" src={cover} alt="product image" />
            <div className="flex w-40 h-20 flex-col justify-center items-center mb-8">
                    <h5 className="text-s font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">${price}</span>
            </div>
                    <button className="pt- text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick = {() =>dispatch(addCart({id, price, qty, name, cover, totalPrice}))}
                    >
                      Add to cart
                    </button>
        </div>
    </div>
  )
}

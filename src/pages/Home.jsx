import React from 'react'
import { Slider } from '../components/Slider'
import { Order } from '../components/Order'
import { Category } from '../components/Category'
import { Products } from '../components/Products'


export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex  h-full p-4'>
      <Slider/>
      </div>
      <div className='w-full h-60 pt-10 px-80'>
      <Order/>
      </div>
      <div className=' w-auto'>
      <Category/>
      </div>
      <div className=''>
      <Products/>
      </div>
      
    </div>
  )
} 
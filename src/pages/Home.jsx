import React from 'react'
import { Slider } from '../components/Slider'
import { Order } from '../components/Order'
import { Category } from '../components/Category'

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full pt-20 my-4'>
      <Slider/>
      <div className='w-full h-full my-20'>
      <Order/>
      </div>
      <Category/>
    </div>
  )
} 

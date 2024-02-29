import React from 'react'
import { Slider } from '../components/Slider'
import { Order } from '../components/Order'
import { Category } from '../components/Category'

export const Home = () => {
  return (
    <div className='pt-4'>
      <Slider/>
      <div className='w-full h-screen my-40'>
      <Order/>
      <Category/>
      </div>
    </div>
  )
} 

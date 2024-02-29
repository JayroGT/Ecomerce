import React from 'react'
import { Carousel } from '@material-tailwind/react';
import { slide } from '../assets/data/data';

export const Slider = () => {

  return (
    <div className='flex justify-center items-center'>
        <Carousel className="rounded-xl" style={{ width: '90%' }}>
            {slide.map((sliders, i) => (
                i % 2 === 0 ? (
                    <div className='flex justify-center items-center' key={i}>
                        <div className='flex w-full h-full'>
                            <img
                                src={sliders.image}
                                alt={`image ${i + 1}`}
                                className="w-full h-auto object-cover rounded-xl mr-1"
                                style={{ width: '50%', height: '100%' }}
                            />
                            {slide[i + 1] && (
                                <img
                                    src={slide[i + 1].image}
                                    alt={`image ${i + 2}`}
                                    className="w-full h-auto object-cover rounded-xl ml-1"
                                    style={{ width: '50%', height: '100%' }}
                                />
                            )}
                        </div>
                    </div>
                ) : null
            ))}
        </Carousel>
    </div>
  )
}

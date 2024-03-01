import React from 'react'
import { category } from '../assets/data/data'

export const Category = () => {
  return (
    // <div>
          <section className='flex flex-wrap justify-center p-8'>

            {category.map((cat, i) =>(
              <div key={i}>
              <div id={cat.id} className=' flex flex-col w-40 justify-center m-4 items-center shadow-2xl rounded-lg shadow-gray-500/70'>
                  <img className="rounded-lg m-1 w-auto h-30" alt="foto" src={cat.cover} />
                  <div className="text-center m-2">
                      <p className="text-md">{cat.title}</p>
                  </div>
              </div>
              </div>
            ))}
          </section>
    // </div>
  )
}

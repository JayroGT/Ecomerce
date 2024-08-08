import React from 'react'
import { ProductCard } from './ProductCard'
import { product } from '../assets/data/data'

export const Products = () => {
  return (
        <>
        <section className='flex w-11/12'>
            <div className='grid w-full gap-4 grid-cols-1 md:grid-cols-3'>
                {product.map((prod,i) => (
                    <div key={i}>
                        <ProductCard
                        id={prod?.id}
                        name={prod?.name}
                        price={prod?.price}
                        qty={prod?.qty}
                        category={prod?.category}
                        cover={prod?.cover}
                        desc={prod?.desc}
                        />
                    </div>
                ))}
            </div>
        </section>
        </>        
  )
}

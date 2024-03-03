import React from 'react'
import { ProductCard } from './ProductCard'
import { product } from '../assets/data/data'

export const Products = () => {
  return (
        <>
        <section>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                {product.map((prod, i) => (
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

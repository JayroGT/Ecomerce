import React, { useState } from 'react';
import { category } from '../assets/data/data';

export const Category = () => {
  const itemsPerPage = 6; // Número de elementos a mostrar por página
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % category.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage + category.length) % category.length);
  };

  return (
    <section className='flex flex-row justify-center p-8'>
      <button onClick={handlePrev}>Prev</button>
      <div className='flex flex-wrap'>
        {category.slice(startIndex, startIndex + itemsPerPage).map((cat, i) => (
          <div key={i} className='flex flex-col w-40 justify-center m-4 items-center'>
            <img className="rounded-lg m-1 w-auto h-30" alt={`foto-${i}`} src={cat.cover} />
            <div className="text-center m-2">
              <p className="text-md">{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </section>
  );
};

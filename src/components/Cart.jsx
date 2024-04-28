import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Items } from './Items';

export const Cart = () => {
  const { totalQuantity, itemList } = useSelector((state) => state.cart);
  const [cartOpen, setCartOpen] = useState(false);

  const closeCart = () => {
    setCartOpen(false);
  };

  let total = 0;
  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  const round = total.toFixed(2);

  return (
    <>
      <div className="relative flex items-center cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
      <svg
        className="h-6 w-6"
        height="512px"
        id="Layer_1"
        style={{ enableBackground: 'new 0 0 512 512' }}
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M441,416c0,13.8-11.2,25-25,25s-25-11.2-25-25s11.2-25,25-25S441,402.2,441,416z" />
        <path d="M153,416c0,13.8-11.2,25-25,25s-25-11.2-25-25s11.2-25,25-25S153,402.2,153,416z" />
        <path d="M127.9,96l-11.1-32H64v17h41.7l57.5,213.3c-32.4,11.3-59.9,37.9-65.3,73.1C96,379.1,96,384,96,384h352v-16.7H115.3   c4.7-31.6,38.8-58.1,74.1-62.5s243.3-34.2,243.3-34.2L448,96H127.9z M416,256l-235,33.3c-0.9,0.2-1.8,0.4-2.7,0.6l-44.7-177.3   h297.7L416,256z" />
      </svg>
        { 
        
        totalQuantity === 0 ?  
        null
        :
      <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full">
        <span className='text-xs'>{totalQuantity}</span>
      </div>

        }
      </div>

      <div className={cartOpen ? "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50" : "hidden"}>
        <div className={cartOpen ? "flex flex-col h-screen gap-15 fixed right-0 border-l border-zinc-300 w-1/3 h-full bg-white shadow-md z-50" : "hidden"}>
          <div className="h-16 justify-between p-3 border-b border-gray-300 flex items-center">
            <h2 className="text-lg font-semibold">Carrito de Compras</h2>
            <button className='text-gray-600 hover:text-gray-800 focus:outline-none' onClick={closeCart}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='bg-gray-100 h-5/6 overflow-y-auto overflow-x-hidden'>
            {itemList.map((item, index) => (
              <div key={index} className="p-5 m-5 ml-5 mr-9">
                <Items
                  id={item.id}
                  cover={item.cover}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                  qty={item.qty}
                  category={item.category}
                  totalPrice={item.totalPrice}
                />
              </div>
            ))}
          </div>
          <div className=" h-1/4 flex items-center justify-center">
            <div className="flex flex-col items-center w-3/4">
              <div className="flex justify-between w-full p-2">
                <span className="font-semibold">Total:</span>
                <span className='text-md'>${round}</span>
              </div>
              <p className="text-xs text-gray-600">Impuestos y gastos de envío calculados al finalizar la compra.</p>
              <button className='mt-3 bg-black text-white rounded-md py-2 w-full'>Pagar</button>
              <p className="text-xs text-gray-600 mt-4">o Continuar Comprando</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


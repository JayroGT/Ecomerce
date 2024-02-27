import React, {useState} from 'react'

export const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const closeCart= () =>{
    setCartOpen(null)
  }
  return (
    <>
    <div className='relative flex items-center'onClick={() => setCartOpen(!cartOpen)} >
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
      <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full">
        <span className='text-xs'>2</span>
      </div>
    </div>

    <div className={cartOpen ? "fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 z-50": "hidden"}>
      <div className={cartOpen ? "fixed top-0 right-0 border-l border-zinc-300  w-80 h-screen p-20 bg-white shadow-md z-50": "hidden"}>
        <h2>Cart</h2>
        <button onClick={closeCart}>Cerrar</button>
      </div>
    </div>
    </>
  )
}
import React, { useEffect, useState } from "react";
import {Cart} from "./Cart";
import { UserName } from "./UserName";

export const Header = () => {

// // Codigo para que el header quede flotante luego de hacer Scroll 


//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0); // setea el valor si el scroll se activa
//     };

//     window.addEventListener("scroll", handleScroll);  // activa la funcion segun la activacion del scrool

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  return (

    // si el scroll se activa entonces la funcion de arriba setea el valor para que cambie el estilo que indica abajo   "condicion ? True : False"

    // <header className={`${isScrolled ? 'sticky top-0 left-0 w-full shadow-md z-50 bg-white' : ''}`}>   
    <header className='sticky top-0 left-0 w-full shadow-md z-50 bg-white'>   
        <div className="flex flex-row h-20 justify-between items-center mx-3">
            <div className='w-full basis-1/4 '>
                <div className="flex ml-2">
                <svg
                    className="h-20 w-20"
                    enableBackground="new 0 0 128 128"
                    id="Lager_1"
                    version="1.1"
                    viewBox="0 0 128 128" 
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                > 
                    <path d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z" fill="#FDB917"/>
                    <polygon points="58.8,52.5 58.8,86.4 47.1,86.4 47.1,52.5 38.7,52.5 38.7,43 67.2,43 67.2,52.5"/>
                    <path d="M84.9,86.6C83.5,86.9,82,87,80.1,87c-3.9,0-6.7-1-8.4-2.9c-1.7-1.9-2.6-4.8-2.6-8.8v-13h-3.6l7.6-16.1h7.6v7.4H89v8.7h-8.2  v12.3c0,2.2,1,3.3,3.1,3.3l0,0c0.8,0,1.6-0.2,2.5-0.4c0.2,3.2,1.2,5.8,2.9,7.8C87.8,85.8,86.2,86.3,84.9,86.6z"/>
                </svg>    
                </div>
            </div>
            <div className="basis-1/2">
                <div className='flex  h-10 items-center border-r-2 border-b-2 rounded-md border-black-700'>
                    <div>
                        <svg className="pl-2 w-6 h-6" height="512px" id="Layer_1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3c0,84.1,68.1,152.3,152.1,152.3 c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2c22.7,22.7,35.2,52.9,35.2,85 c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85 c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
                        </svg>                    
                    </div>
                    <input
                        className='text-sm text-zinc-600 py-2 px-2 mr-1 h-4 w-full focus:outline-none'
                        type='text'
                        placeholder='Search...'
                    />
                </div>
            </div>
                    <Cart />    
                <div className=" basis-1/7 flex items-center">
                    <UserName />
                </div>
        </div>
        </header>
  )
}
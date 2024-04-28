import React, { useState } from 'react'
import {useAuth0 } from '@auth0/auth0-react'

export const UserName = () => {

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log("El login es " + isAuthenticated)
  console.log(JSON.stringify(user))

  const [open, setOpen] = useState(false)

  const close = () =>{
    setOpen(false)
  }
  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
          <button onClick={()=> setOpen(!open)}>
            <img className='size-10' src={user.picture} alt='lalala'  />
          </button>

          {open && (
            <div className='bg-white shadow-lg shadow-black-500/100 absolute top-20 right-10 w-auto p-4 border-t-2' onClick={close}>
              <div className="bg-white w-full">
                <div className='flex'>
                  <div>
                    <img className='size-10' src={user.picture} alt='lalala' />
                  </div>
                  <div className='flex flex-col m-2'>
                  <h4>{user.name}</h4>
                  </div>
                </div>
                <div className='flex flex-col items-start'>
                  <button>My account</button>
                  <button>My order</button>
                  <button>Wishlist</button>
                  <button>Help</button>
                  <button 
                  onClick={()=> logout()}
                  >Log out</button>
                </div>
              </div>
            </div>
          )
          }
          </>
        ):(
          <button className="text-white bg-[#050708] hover:bg-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          onClick={() => loginWithRedirect()}
          > 
            Log In
          </button>
        )}
      </div>
    </>
  )
}


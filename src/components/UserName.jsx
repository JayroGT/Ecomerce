import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slice/authSlice'

export const UserName = () => {
  const {isLoggIn} = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  const [open, setOpen] = useState(false)

  const close = () =>{
    setOpen(null)
  }
  return (
    <>
      <div>
        {isLoggIn ? (
          <>
          <button onClick={()=> setOpen(!open)}>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='lalala'  />
          </button>

          {open && (
            <div className='bg-white shadow-lg shadow-black-500/100 absolute top-20 right-10 w-auto p-4 border-t-2' onClick={close}>
              <div className="bg-white w-full">
                <div className='flex'>
                  <div>
                    <img className='size-10' src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='lalala' />
                  </div>
                  <div className='flex flex-col m-2'>
                  <h4>Nombre del usuario</h4>
                  <label htmlFor='' className='text-xs'>ubicacion geografica</label>
                  </div>
                </div>
                <div className='flex flex-col items-start'>
                  <button>My account</button>
                  <button>My order</button>
                  <button>Wishlist</button>
                  <button>Help</button>
                  <button 
                  onClick={()=> dispatch(logout())}
                  >Log out</button>
                </div>
              </div>
            </div>
          )
          }
          </>
        ):(
          <button>My account</button>
        )}
      </div>
    </>
  )
}


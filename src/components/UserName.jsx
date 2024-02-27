import React, { useState } from 'react'

export const UserName = () => {
  const user = true
  const [open, setOpen] = useState(false)

  const close = () =>{
    setOpen(null)
  }
  return (
    <>
      <div>
        {user ? (
          <>
          <button onClick={()=> setOpen(!open)}>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='lalala'  />
          </button>

          {open && (
            <div className='bg-white shadow-md absolute top-20 right-10 w-72 p-4' onClick={close}>
              <div className="bg-white w-full">
                <div>
                  <div className='flex'>
                    <img className='size-10' src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='lalala' />
                  </div>
                </div>
              </div>
            </div>
          )
          }
          </>
        ):(
          "login"
        )}
      </div>
    </>
  )
}

 
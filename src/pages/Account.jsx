import React from 'react'

export const Account = () => {
  return (
    <>
        <section className='flex flex-col h-auto shadow rounded-2xl mx-60 my-20 shadow-lg shadow-gray-500/90'>
            <h1 className='pl-10'>Account information</h1>
            <div className='justify-center w-auto flex gap-10 items-center jsutify-center'>
                <img src="" alt="foto por mostrar" />

                <form className='flex flex-col w-80 border-black'> 
                    <div className='mb-5 w-full pt-2'>
                        <label className='block'>Username</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className='mb-5 w-full'>
                        <label className='block'>Email</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className='mb-5 w-full pb-2'>
                        <label className='block'>Password</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className='flex mb-5'>
                        <button className='pt- text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            Update
                        </button>
                    </div>

                </form>
            </div>

        </section>
    </>
  )
}

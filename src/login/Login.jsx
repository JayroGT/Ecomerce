import React from 'react'

export const Login = () => {
  return (
    <>
    <section className='flex w-auto flex-col gap-10 pb-10'>
        <div className='flex justify-center items-center p'>
                <div className="w-full h-auto  overflow-hidden">
                    <img 
                    className="bg-blue-200 h-80 w-full object-cover"
                    style={{ objectPosition: 'center bottom' }}
                    src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.jpg?s=1024x1024&w=is&k=20&c=etwE-xKS1ysCnObTBDP660x4HwHAWK0Qr2htbjwNN4E=" alt="" />
                </div>
                    <div className='absolute flex flex-col justify-center items-center my-10 text-4xl font-bold text-white'>
                        <h3>log in</h3>
                    </div>
                </div>

            <div className='flex justify-center mx-auto border rounded-lg p-10 shadow-lg shadow-gray-500/40'>
            <form className="w-80">
                    <div className="mb-5">
                        <label 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                        <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>


                    <div className="mb-5">
                        <label 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>

                        <input 
                        type="password" 
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>


                    <div className="flex items-start mb-5">
                        <div 
                        className="flex items-center h-5">
                        <input 
                        id="remember" 
                        type="checkbox" 
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>

                        <label 
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>

                    </div>

                    <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
            <div className='flex justify-center items-center'>
                <a href='/register'>
                register now
                </a>
            </div>
    </section>
    </>
  )
}

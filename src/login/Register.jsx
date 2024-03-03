import React from 'react'

export const Register = () => {
  return (
    <div>
        <section className="flex flex-col gap-20 pb-40">
            <div className='flex justify-center items-center'>
            <div className="w-full h-auto  overflow-hidden">
                <img 
                className="bg-blue-200 h-80 w-full object-cover"
                style={{ objectPosition: 'center bottom' }}
                src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.jpg?s=1024x1024&w=is&k=20&c=etwE-xKS1ysCnObTBDP660x4HwHAWK0Qr2htbjwNN4E=" alt="" />
            </div>
                <div className='absolute flex flex-col justify-center items-center my-10 text-4xl font-bold text-white'>
                    <h3>Register</h3>
                    <h1>My Account</h1>
                </div>
            </div>
            {/* <form className='bg-blue-100 w-50 flex flex-col'>
                <span>Email addres</span>
                <input/>
                <span>Username*</span>
                <input/>
                <span>Password*</span>
                <input/>
                <span>Confirm pasword*</span>
                <input/>
                <button className='w-auto h-auto bg-blue-200 border rounded-lg border-blue-100'>Submit</button>
            </form> */}
            

            <form className="border rounded-2xl p-10 max-w-md mx-auto shadow-lg shadow-gray-400/100">
            <div className="mb-5">
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                <input 
                type="email" id="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>


            <div 
            className="mb-5">
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>

                <input 
                type="password" 
                id="password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>


            <div 
            className="mb-5">
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>

                <input 
                type="password" 
                id="repeat-password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>


            <div 
            className="flex items-start mb-5">
                <div 
                className="flex items-center h-5">
                <input 
                id="terms" 
                type="checkbox" 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>


                <label 
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the 
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                </label>
            </div>


            <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

        </section>
    </div>
  )
}

import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=' contact-main'>
      <div className="heroo">
        <div className="igm -z-20 relative">
            <img src="./images/contact2.jpg" alt="" />
            <div className="content absolute max-xl:top-10 max-xl:left-32 top-48 max-md:top-20 left-56 w-4/6 max-sm:top-8 max-sm:left-16 text-white">
                <h2 className=' text-5xl font-bold text-center max-lg:text-2xl'>Contact</h2>
                <h2 className=' my-6 w-9/12 text-lg text-center m-auto max-md:hidden'>Grow Your Business With Our Expertise We Understand The Importance Of Approaching Each Work Integrally and Believe in the Power of Simple</h2>
                <div className="btn text-center max-md:my-4"><button className=' hover:bg-blue-300 duration-300 text-white py-2 px-4 rounded-full border border-white bg-blue-600'>Let's Work Together</button></div>
            </div>
        </div>
      </div>

      <div classname="form">

      <div className="head text-center my-10">
        <h2 className=' text-5xl font-bold '>Get In Touch</h2>
      </div>
  {/* component */}
  <div className="h-96 max-md:h-96 md:flex m-10">
    <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
      <div>
        <h1 className="text-white font-bold text-4xl font-sans">Go Finance</h1>
        <p className="text-white mt-1 underline my-2">For Other Way Contact</p>
        <h2 className=' text-white text-xl font-bold my-4'>Email_Address : abcd@hmail.com</h2>
        <h2 className=' text-white text-xl font-bold my-4'>Phone No : +92 03xxxxxxxxxxx</h2>
        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
      </div>
      <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
    </div>
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <input className="pl-2 outline-none border-none" type="text" name id placeholder="Full name" />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <input className="pl-2 outline-none border-none" type="text" name id placeholder="Username" />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input className="pl-2 outline-none border-none" type="text" name id placeholder="Email Address" />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input className="pl-2 outline-none border-none" type="text" name id placeholder="Password" />
        </div>
        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      </form>
    </div>
  </div>
</div>
        <div className="map  my-16 mx-12">
        <iframe className=' w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7586655716423!2d74.3403859754492!3d31.475824274234412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190426c1b26777%3A0x7a3841413fcc77e3!2sArfa%20Software%20Technology!5e0!3m2!1sen!2s!4v1715411387546!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
    </div>
  )
}

export default Contact

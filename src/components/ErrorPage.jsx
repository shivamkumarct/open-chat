import React from 'react'
import errorImg from "../assets/error.jpg"

const ErrorPage = () => {
  return (
    // <div className='text-3xl text-center my-10'>
    //     <p >404</p>
    //     <p className='items-center'>Page Not Found</p>
    // </div>
    <div>
        <img src={errorImg} alt="404 Not Found" width={600} className='mx-auto'/>
    </div>
  )
}

export default ErrorPage
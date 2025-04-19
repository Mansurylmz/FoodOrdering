import React from 'react'
import { Link } from 'react-router-dom'
const Warning = () => {
  return (
    <div className='flex flex-col items-center gap-4'>Sepette henüz herhangi bir ürün bulunmuyor
    <Link to={"/"} className='bg-red-500 p-2 rounded shadow text-white hover:bg-red-400 transition duration-500'>Restoranlara Gözat</Link>
    </div>
  )
}

export default Warning
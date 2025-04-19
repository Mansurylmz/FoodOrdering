import React from 'react'

const Error = ({info}) => {
    
  return (
    <div className='bg-red-100 mt-32 p-10 rounded text-lg text-center'>
        <p>Üzgünüz bir hata oluştu</p>
        
        <p className='font-semibold mt-5'>{info}</p>
    </div>
  )
}

export default Error
import React from 'react'
import Detail from './Detail'
import Products from './Products'

const Restaurant = () => {
  
  
  return (
    <div>
    <div className='shadow'>
      <div>
        <Detail/>
      </div>
    </div>
      <div>
      <div className='shadow'>
        <Products/>
      </div>
      </div>
    </div>
  )
}

export default Restaurant
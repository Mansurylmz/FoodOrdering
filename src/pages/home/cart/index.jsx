import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../../components/Loader'
import Card from './Card'
import Warning from './Warning'
import OrderBox from './orderBox'

const Cart = () => {
  const {isLoading,cart}=useSelector((store)=>store.cartReducer)
  return (
    <div className='m-2'>
      <h1 className='text-2xl font-bold mb-5'> Sepet</h1>
      <div className='grid md:grid-cols-[1fr_300px] gap-4'>
        <div>
          { isLoading ? <Loader/> : cart.length===0 ? <Warning/> : cart?.map((item)=><Card key={item.id} product={item} />)}
        </div>
        {cart.length>0 && <OrderBox cart={cart}/> }
      </div>
    </div>
  )
}

export default Cart
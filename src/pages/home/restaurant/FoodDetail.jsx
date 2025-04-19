import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { createItem,updateItem } from '../../../redux/actions/basketActions'


const FoodDetail = ({product}) => {
    const dispatch=useDispatch()
    const {cart}=useSelector((store)=>store.cartReducer)
    const found = cart?.find((cartItem) => cartItem.id === product.id);
    const handleAdd = () => {
        found
          ? // eleman sepette varsa miktarını 1 attır
            dispatch(updateItem(found.id, found.amount + 1))
          : // eleman sepette yoksa sepete ekle
            dispatch(createItem(product));
      };
    
   
    
  return (
    <div className='grid grid-cols-[1fr_115px] gap-3 m-2 shadow p-3 rounded-lg hover:bg-red-100 hover:scale[1.02] transition duration-300 cursor-pointer'>
        <div className='shadow flex flex-col justify-between p-2 rounded '>
            <div>
                <h1 className='text-xl font-semibold'>{product.title}</h1>
            </div>
            <div>
                <p className='text-gray-500 mt-1'>{product.desc}</p>
            </div>
            <div>
                <span className='text-lg font-semibold'>{product.price}$</span>
            </div>
        </div>
        <div className='relative'>
            <img className='h-full rounded object-cover size-full' src={product.photo} alt="" />
            <button onClick={handleAdd} className='absolute end-2 bottom-2 rounded-full text-[15px] bg-white p-1 hover:bg-red-500 transition duration-500'>{found ? <p className='rounded-full flex items-center px-1'>{found.amount}</p> : <FaPlus/>}</button>
        </div>
    </div>
    
  )
}

export default FoodDetail
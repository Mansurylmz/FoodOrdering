import React from 'react'
import { Link } from 'react-router-dom'
import { IoRestaurantSharp } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from 'react-redux';


const Header = () => {
  const {restaurants}=useSelector((store)=>store.restaurantReducer)
  const {cart}=useSelector((store)=>store.cartReducer)
  const amount=cart.reduce((acc,item)=>acc+item.amount,0)
  return (
    <header className='shadow '>
           <div className='max-w-[1440px] mx-auto p-5 lg:p-8 flex justify-between items-center'>
        <Link to={"/"} className='text-red-500 font-[900] text-2xl font-mono md:text-3xl' >Thunk Sepeti</Link>
        <div className='flex gap-5'>
            <Link to={"/"} className='flex items-center gap-1 hover:underline cursor-pointer font-[500]'>Yakınınızda {restaurants.length} <IoRestaurantSharp className='text-red-500' /> <span className='max-md:hidden'>Restoran var</span> </Link>
            <button className='border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition duration-350 max-md:hidden cursor-pointer'>Giriş Yap</button>
            <button className='border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition duration-350 max-md:hidden cursor-pointer'>Kaydol</button>
            <Link to={"/cart"} className='flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded-full transition duration-550'><BsBasket />
            {cart.length>0 && <span>{amount}</span>}
            </Link>
            
        </div>
    </div>
    </header>
  )
}

export default Header
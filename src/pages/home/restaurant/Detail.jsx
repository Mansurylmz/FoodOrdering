import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import Loader from '../../../components/Loader'
import { FaArrowDown } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Detail = () => {
    const {id}=useParams()
    const [restaurant,setRestaurant]=useState([]);

    useEffect(()=>{
        api.get(`/restaurants/${id}`)
        .then((res)=>setRestaurant(res.data))
        
    },[]);
  return (
    <div >
        {!restaurant ? <Loader/> : <div className='flex gap-5 p-3'>
            <img src={restaurant.photo} alt="restaurant-photo" className='w-[150px] h-[150px] rounded-md' />
            <div className='flex flex-col items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div  ><p className='flex gap-2 items-center justify-between'><FaArrowDown className='text-red-500' /> {restaurant.minPrice} TL</p></div>
                    <div><p className='flex gap-2 items-center justify-between'><CiClock2  className='text-red-600'/> {restaurant.estimatedDelivery} dk</p></div>
                </div>
                <div className='mt-4'>
                    <h4 className='font-bold text-xl'>{restaurant.name}</h4>
                </div>
                <div className='flex mt-4'>
                    <div >
                        <p className='flex gap-1 items-center'><FaStar className='text-red-600' /> {restaurant.rating} </p>
                    </div>
                    <div><p className='text-red-800 ml-3 cursor-pointer'>Yorumları Gör</p></div>
                </div>
                
            </div>
        </div> }
    </div>
  )
}

export default Detail
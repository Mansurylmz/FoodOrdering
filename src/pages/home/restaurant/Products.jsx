import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import { FaFire } from 'react-icons/fa'
import FoodDetail from './FoodDetail'




const Products = () => {
    const {id}=useParams()
    const [products,setProducts]=useState(null)

    useEffect(()=>{
        api.get(`/products?restaurantId=${id}`).then((res)=>setProducts(res.data))
    },[])
   
  return (
    <div className='ml-2'>
        <h2 className='text-2xl font-bold flex items-center gap-2 mt-2'><FaFire className='text-red-500'/> Popüler</h2>
        <p className='text-gray-600'>Restoranın en çok tercih edilen ürünleri</p>
        <div className='grid lg:grid-cols-2 gap-5 mt-4'>
            {products?.map((item,key)=><FoodDetail key={key} product={item}/>)}
        </div>
      
    </div>
  )
}

export default Products
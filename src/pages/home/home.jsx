import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Card from './restaurant/Card'

const Home = () => {
  const {isLoading,error,restaurants}=useSelector((store)=>store.restaurantReducer)
  return (
    <div className='p-3'>
      <h1 className='font-semibold text-xl md:text-2xl mb-5 mt-3 ml-3 p-6 '>Yakınınızdaki Restoranlar</h1>
      <div className='home-page'>
      {isLoading ? <Loader/> : error ? <Error info={error}/> : restaurants.map((item,key)=><Card key={key} restaurant={item} />)}
      </div>
    </div>
  )
}

export default Home
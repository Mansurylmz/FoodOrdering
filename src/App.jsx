import React, { useEffect } from 'react'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurant from './pages/home/restaurant/restaurant'
import Cart from './pages/home/cart'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { getRestaurants } from './redux/actions/getActions'
import { getBasket } from './redux/actions/basketActions'


const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getRestaurants())
    dispatch(getBasket())
  },[])
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
      <Header/>
      <div className='flex-1'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurant/:id' element={<Restaurant/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
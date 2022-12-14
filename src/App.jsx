import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Success from './pages/Success'
import './styles.css'
import 'animate.css'

const App = () => {
  return (
    <div className='container mx-auto bg-primary'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import Home from './components/pages/Home'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './components/pages/Cart';

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </Router>
    
    </>
  )
}

export default App
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';//react routr akta js libry,dynamic routin r jono use..spa atar jonoi hoi

import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import ProfilePg from './pages/ProfilePg';
import './style.css'
function App() {
  return (
    <div>
     
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<HomePages/>}/>
    <Route path='/product' element={<ProductPages/>}/>
    <Route path='/profile' element={<ProfilePg/>}/>
   

  </Routes>
  
  </BrowserRouter>
    </div>
  )
}

export default App








































































































































































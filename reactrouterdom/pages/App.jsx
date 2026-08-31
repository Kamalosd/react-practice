
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import ProfilePg from './pages/ProfilePg';
function App() {
  return (
    <div>
     
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<HomePages/>}/>
    <Route path='/product' element={<ProductPages/>}/>
        <Route path='/profile' element={<ProfilePg/>}/>
    <Route path='*' element={<Error/>}/>

  </Routes>
  
  </BrowserRouter>
    </div>
  )
}

export default App

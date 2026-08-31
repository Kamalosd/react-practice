

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Router/Home';
import Contact from './Router/Contact';
import Error from './Router/Error';

//browser a routin r kj krbo tai ata tkbe fsta.routes r modhe akta akta kre route toiri krbo.home k import krbo
//fst a path ble dbo /home dile home jbo sta blbo elemt r modhe compont r nm
export default function App() {
  return (
  <BrowserRouter>//ata browser r current loc ta store kre5

  <Routes>
    <Route path='/Home' element={<Home/>}/>//sinle pG r loc
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>

  </Routes>
  
  </BrowserRouter>
  )
}

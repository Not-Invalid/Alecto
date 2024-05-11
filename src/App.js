import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import { Kategori } from './Pages/Kategori';
import {Product} from './Pages/Product';
import {Cart} from './Pages/Cart';
import { LoginRegister } from './Pages/LoginRegister';
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/banner.jpg'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/man' element={<Kategori banner={banner} kategori="man"/>}/>
        <Route path='/women' element={<Kategori banner={banner} kategori="women"/>}/>
        <Route path='/kids' element={<Kategori banner={banner} kategori="kids"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginRegister/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

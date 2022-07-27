import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products';
import { Navbar } from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import Slider from './components/Slider';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='products' element={<Products />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
    <Slider />
    <Footer />
    
    </>
  );
}

export default App;

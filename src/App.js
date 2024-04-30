 
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Products from './component/Products';
import Contact from './component/Contact';
import SingleProduct from './component/SingleProduct';
import Cart from './component/Cart';
import Error from './component/Error';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductList from './component/ProductList';

function App() {
  return (
    <BrowserRouter>
         <Header/>
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}  />
        <Route path="*" element={<Error/>} />

      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;

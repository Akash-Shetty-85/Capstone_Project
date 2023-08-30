
import './App.css';
import Home from './components/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from './components/Signup/Singup';
import Not_Found from './components/Not_Found/Not_Found';
import SignIn from './components/Signin/Signin';
import ProductDetail from './ProductDetails/ProductDetail';
import CreateOrder from './components/CreateOrder/CreateOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/order" element={<CreateOrder/>} />
        <Route path="*" element={<Not_Found/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

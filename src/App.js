import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Product } from './product/Product';
import Laptop from './components/Laptop';
import Mobile from './components/Mobile';
import Airpord from './components/Airpord';
import Speaker from './components/Speaker';
import Led from './components/Led';
import Laptopdetail from './components/Laptopdetail';
import Mobiledetail from './components/Mobiledetail';
import Airpordsdetail from './components/Airpordsdetail';
import Speakerdetail from './components/Speakerdetail';
import Leddetail from './components/Leddetail';
import Protected from './components/Protected';
import Login from './pages/Login';
import About from './components/About';
import Contact from './components/Contact';

import Productdetail from './product/Productdetail';
import Scroll from './components/Scroll';
import Shoppingcart from './components/Shoppingcart';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
    <Scroll/>
      <Navbar />
      <Routes>
        <Route element={<Protected auth={auth}/>}>
          <Route path='/' element={<Product />}></Route>
          <Route path='/:id' element={<Productdetail />}></Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/laptop/:id' element={<Laptopdetail />}></Route>
          <Route path='/mobile' element={<Mobile />}></Route>
          <Route path='/mobile/:id' element={<Mobiledetail />}></Route>
          <Route path='/airpord' element={<Airpord />}></Route>
          <Route path='/airpord/:id' element={<Airpordsdetail />}></Route>
          <Route path='/speaker' element={<Speaker />}></Route>
          <Route path='/speaker/:id' element={<Speakerdetail />}></Route>
          <Route path='/tv' element={<Led />}></Route>
          <Route path='/tv/:id' element={<Leddetail />}></Route>
          <Route path='/shopping' element={<Shoppingcart />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
        <Route path='/login' element={<Login setAuth={setAuth} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import NavTop from './components/NavTop'
import MainNav from './components/MainNav'
import NavDown from './components/NavDown'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from "./pages/Login.jsx"
import Cart from './pages/Cart.jsx';
import { useLocation } from 'react-router-dom'
// import TopSeller from "./pages/ProductPage.jsx"
// import NEWArrivals from "./pages/NEWArrivals.jsx"
// import Savings from "./pages/Savings.jsx"
// import Sneaker from "./pages/Sneaker.jsx"
// import Chill from "./pages/Chill.jsx"
// import CargoPants from "./pages/CargoPants.jsx"
// import Bottoms from "./pages/Bottoms.jsx"

import ProductDetails from './pages/ProductDetails.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const location = useLocation();
  const isCartPage = location.pathname === '/Cart';
  // console.log(location.pathname)
  const isHome = location.pathname === '/';
  return (

    <>
      <ToastContainer />
      {isHome && <NavTop />}
      <MainNav />
      {isHome && <NavDown />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:sectionName" element={<ProductPage />} />
        {/* <Route path="/new-arrivals" element={<NEWArrivals />} />
        <Route path="/savings-zone" element={<Savings />} />
        <Route path="/sneaker" element={<Sneaker />} />
        <Route path="/chill-collection" element={<Chill />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/cargo-pants" element={<CargoPants />} /> */}
        <Route path="/:sectionName/:productId" element={<ProductDetails />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {!isCartPage && <Footer />}
    </>



  )
}

export default App

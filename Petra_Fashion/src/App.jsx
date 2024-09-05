import React from 'react'
import NavTop from './components/NavTop'
import MainNav from './components/MainNav'
import NavDown from './components/NavDown'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from "./pages/Login.jsx"
import TopSeller from "./pages/TopSeller.jsx"
import NEWArrivals from "./pages/NEWArrivals.jsx"
import Savings from "./pages/Savings.jsx"
import Sneaker from "./pages/Sneaker.jsx"
import Chill from "./pages/Chill.jsx"
import CargoPants from "./pages/CargoPants.jsx"
import Bottoms from "./pages/Bottoms.jsx"


function App() {
  return (

    <Router>
      <NavTop />
      <MainNav />
      <NavDown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/top-seller" element={<TopSeller />} />
        <Route path="/new-arrivals" element={<NEWArrivals />} />
        <Route path="/savings-zone" element={<Savings />} />
        <Route path="/sneaker" element={<Sneaker />} />
        <Route path="/chill-collection" element={<Chill />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/cargo-pants" element={<CargoPants />} />

      </Routes>
    </Router>



  )
}

export default App

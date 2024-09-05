import React from 'react'

import TopSellers from './TopSellers.jsx'
import NewArrivals from './NewArrivals.jsx'
import SavingsZone from './SavingsZone.jsx'
import Sneakers from './Sneakers.jsx'
import MustHaveBottoms from './MustHaveBottoms.jsx'
import TopSlider from './TopSlider.jsx'
import TopHits from './TopHits.jsx'
import Fandom from './FandomShop.jsx'
import TooHotToBeMissed from './TooHot.jsx'
import BestPicks from './BestPicks.jsx'
import ChillProof from './ChillProof.jsx'
import CargoPants from './CargoPants.jsx'
import Footer from './Footer.jsx'




const Home = () => {
    return (

        <>

            <TopSlider />
            <TopSellers />
            <NewArrivals />
            <TopHits />
            <SavingsZone />
            <Sneakers />
            <MustHaveBottoms />
            <Fandom />
            <ChillProof />
            <TooHotToBeMissed />
            <BestPicks />
            <CargoPants />
            <Footer />


        </>

    );
}

export default Home

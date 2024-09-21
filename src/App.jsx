import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features/Features'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import ConnectYourStore from './Components/ConnectYourStore/ConnectYourStore'
import Banner from './Components/Banner'
import Reviews from './Components/Reviews/Reviews'
import Financials from './Components/Financials'
import Footer from './Components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <ConnectYourStore />
      <Banner />
      <Reviews />
      <Financials />
      <Footer />
    </>
  )
}

export default App

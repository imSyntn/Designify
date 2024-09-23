import { useState, useEffect } from 'react'
import './App.css'
import { Header, HeroSection, HowItWorks, Features, ConnectYourStore, Banner, Reviews, Financials, Footer, Loader } from './Components/Index'

function App() {
  const [isLoaded, setIsLoaded] = useState(false) // This state is used to show and hide the Loader

  useEffect(() => {  // If all the components are rendered then after 1 second the isLoaded state will be false and the Loader will be invisible
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    !isLoaded ? (
      <Loader />
    ) : (
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
  )
}

export default App

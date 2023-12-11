import { useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Expert from './Components/Expert/Expert'
import Newsletter from './Components/Newlater/Newsletter'
import Footer from "./Components/Footer/Footer"
import Plans from './Components/Plans/Plans'

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Expert />
      <Newsletter />
      <Plans />
      <Footer /> 
    </>
  )
}

export default App

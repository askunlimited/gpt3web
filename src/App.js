import React from 'react'
import {
  Blog,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
  Feature,
} from './containers'
import { Navbar, CTA, Brand } from './components'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

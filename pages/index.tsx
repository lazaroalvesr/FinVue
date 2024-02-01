import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Avaliacao from './components/Avaliacao'
import Choice from './components/Choice'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function index() {
  return (
    <div>
      <Header />
      <Main />
      <Avaliacao />
      <Choice />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

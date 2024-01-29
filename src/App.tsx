// import { useState } from 'react'
import './components/globalStyle.css'
import Header from './components/header/header'
import {  CLOTHES, CONFIRMATION, GALLERY01, GALLERY02, 
          GALLERY03, GALLERY04, GALLERY05, GALLERY06, GALLERY07, 
          GALLERY08, GALLERY09, GALLERY10, GALLERY11, GIFTS, RINGS, 
          WINE } from './globalConstants'

function App() {
  return (
    <>
      <ul>
        <li><Header img={GALLERY06}/></li>
      </ul>
    </>
  )
}

export default App

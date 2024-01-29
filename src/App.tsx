// import { useState } from 'react'
import './components/globalStyle.css'
import Header from './components/header/header'
import {  GALLERY06 } from './globalConstants'

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

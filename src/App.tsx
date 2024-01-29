// import { useState } from 'react'
import './components/globalStyle.css'
import HeaderSection from './components/header/header'
import InformationSection from './components/information/information'
import {  GALLERY06 } from './globalConstants'
function App() {
  return (
    <>
      <ul>
        <li className='section'><HeaderSection img={GALLERY06}/></li>
        <li className='section'><InformationSection 
                                  title='Estás invitando'
                                  message='Queremos que seas parte de este momento especial' /></li>
      </ul>
    </>
  )
}

export default App

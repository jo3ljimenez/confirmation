// import { useState } from 'react'
import './components/globalStyle.css';
import HeaderSection from './components/header/header';
import AudioSection from './components/audio/audio';
import InformationSection from './components/information/information';
import TimerSection from './components/timer/timer';
import MEDIASOURCE from './sourcesConstants';

function App() {
  return (
    <>
      <ul>
        <li className='section'><HeaderSection img={MEDIASOURCE.image01}/></li>
        <li className='section'> <AudioSection audio={MEDIASOURCE.mainAudio}/></li>
        <li className='section'><InformationSection 
                                  title='Estás invitando'
                                  message='Queremos que seas parte de este momento especial' /></li>
        <li className='section'><TimerSection /></li>
      </ul>
    </>
  )
}

export default App;

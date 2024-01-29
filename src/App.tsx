// import { useState } from 'react'
import './components/globalStyle.css';
import HeaderSection from './components/header/header';
import AudioSection from './components/audio/audio';
import InformationSection from './components/information/information';
import TimerSection from './components/timer/timer';
import GallerySeparatorSection from './components/gallerySeparator/gallerySeparator';
import TitleSection from './components/title/title';
import DateSection from './components/date/date';
import TextComponent from './components/text/text';
import MEDIASOURCE from './sourcesConstants';

function App() {
  return (
    <>
      <ul>
        <li className='section'> <HeaderSection img={MEDIASOURCE.image01}/> </li>
        <li className='section'> <AudioSection audio={MEDIASOURCE.mainAudio}/> </li>
        <li className='section'> <InformationSection 
                                  title='Estás invitando'
                                  message='Queremos que seas parte de este momento especial' /></li>
        <li className='section'> <TimerSection /> </li>
        <li className='section'> <GallerySeparatorSection 
                                  leftImg={MEDIASOURCE.image04}
                                  rightImg={MEDIASOURCE.image05} /></li>
        <li className='section'> <TitleSection 
                                  icon={MEDIASOURCE.rings}
                                  title='Ceremonia'
                                  description='San Blas, El Fuerte, Sinaloa'/> </li>
        <li className='section'> <DateSection 
                                  day='9'
                                  hour='16:00'/> </li>
        <li className='section'> <TextComponent 
                                  information='El puente colorado'/> </li>
        <li className='section'> <TitleSection 
                                  icon={MEDIASOURCE.wine}
                                  title='Celebración'
                                  description='San Blas, El Fuerte, Sinaloa'/> </li>
        <li className='section'> <DateSection 
                                  day='9'
                                  hour='18:00'/> </li>
        <li className='section'> <TextComponent 
                                  information='El puente colorado'/> </li>
        <li className='section'> <GallerySeparatorSection 
                                  leftImg={MEDIASOURCE.image07}
                                  rightImg={MEDIASOURCE.image06} /></li>
        {/* <li className='section'></li> */}
      </ul>
    </>
  )
}

export default App;

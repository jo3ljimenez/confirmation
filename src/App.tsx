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
import ButtonSection from './components/button/button';
import ColorsSection from './components/colors/colors';
import BankAccount from './components/bankAccount/bankAccount';
import MEDIASOURCE from './sourcesConstants';
import {  getAmazonGiftTable, getLiverpoolGiftTable, getLocationMap, 
          getMercadoLibreGiftTable  } from './components/generalFunctions';

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
        <li className='section'> <ButtonSection
                                  bottonName='Ver Ubicación'
                                  idButton='locationButton'
                                  onClick={getLocationMap}/> </li>
        <li className='section'> <GallerySeparatorSection 
                                  leftImg={MEDIASOURCE.image07}
                                  rightImg={MEDIASOURCE.image06} /></li>
        <li className='section'><TitleSection
                                 icon={MEDIASOURCE.clothes}
                                 title='Rigurosa etiqueta' 
                                 description='Por respeto a la novia, no usar los siguientes colores'
                                 /></li>
        <li className='section'> <ColorsSection /> </li>
        <li className='section'> <GallerySeparatorSection 
                                  leftImg={MEDIASOURCE.image09}
                                  rightImg={MEDIASOURCE.image08} /></li>
        <li className='section'><TitleSection 
                                  icon={MEDIASOURCE.gifts}
                                  title='Regalos'
                                  description='Tu presencia es nuestro mejor regalo, pero si es tu voluntad hacernos un regalo, 
                                  dejamos a tu disposición nuestros datos'
                                  /></li>                          
        <li className='section'> <BankAccount /> </li>
        <li className='section'> <TextComponent 
                                  information='Mesas De Regalos'/> </li>
        <li className='section'> <ButtonSection
                                  bottonName='Amazon'
                                  idButton='amazonButton'
                                  onClick={getAmazonGiftTable}/> </li>
        <li className='section'> <ButtonSection
                                  bottonName='Liverpool'
                                  idButton='liverpoolButton'
                                  onClick={getLiverpoolGiftTable}/> </li>
        <li className='section'> <ButtonSection
                                  bottonName='Mercado Libre'
                                  idButton='mercadoLibreButton'
                                  onClick={getMercadoLibreGiftTable}/> </li>
        <li className='section'> <GallerySeparatorSection 
                                  leftImg={MEDIASOURCE.image10}
                                  rightImg={MEDIASOURCE.image02} /></li>
        {/* <li className='section'></li> */}
      </ul>
    </>
  )
}

export default App;

// import { useState } from 'react'
import './components/globalStyle.css';
import HeaderComponent  from './components/header/header';
import AudioComponent  from './components/audio/audio';
import InformationComponent  from './components/information/information';
import TimerComponent  from './components/timer/timer';
import GallerySeparatorComponent  from './components/gallerySeparator/gallerySeparator';
import TitleComponent  from './components/title/title';
import DateComponent  from './components/date/date';
import TextComponent from './components/text/text';
import ButtonComponent  from './components/button/button';
import ColorsComponent  from './components/colors/colors';
import BankAccount from './components/bankAccount/bankAccount';
import MEDIASOURCE from './sourcesConstants';
import {  getAmazonGiftTable, getLiverpoolGiftTable, getLocationMap} from './components/generalFunctions';
import ConfirmationForm from './components/confirmationForm/confirmationForm';

function App() {  
  return (
    <>
      <ul>
        <li className='section'> <HeaderComponent  img={MEDIASOURCE.image01}/> </li>
        <li className='section'> <AudioComponent  audio={MEDIASOURCE.mainAudio}/> </li>
        <li className='section'> <InformationComponent  
                                  title='Estás invitado a nuestra boda'
                                  message='Queremos que seas parte de este momento especial' /></li>
        <li className='section'> <TimerComponent  /> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image04}
                                  rightImg={MEDIASOURCE.image05} /></li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.rings}
                                  title='Ceremonia'
                                  description={<span>San Blas, El Fuerte, Sinaloa</span>}/> </li>
        <li className='section'> <DateComponent  
                                  day='9 Marzo'
                                  hour='16:00'/> </li>
        <li className='section'> <TextComponent 
                                  information='El puente colorado'/> </li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.wine}
                                  title='Celebración'
                                  description={<span>San Blas, El Fuerte, Sinaloa</span>}/> </li>
        <li className='section'> <DateComponent  
                                  day='9 Marzo'
                                  hour='18:00'/> </li>
        <li className='section'> <TextComponent 
                                  information='El puente colorado'/> </li>
        <li className='section'> <ButtonComponent  
                                  bottonName='Ver Ubicación'
                                  idButton='locationButton'
                                  onClick={getLocationMap}/> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image07}
                                  rightImg={MEDIASOURCE.image06} /></li>
        <li className='section'><TitleComponent  
                                 icon={MEDIASOURCE.clothes}
                                 title='Rigurosa etiqueta' 
                                 description={<span>Por respeto a la novia, <b>NO</b> usar los siguientes colores</span>}
                                 /></li>
        <li className='section'> <ColorsComponent  /> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image09}
                                  rightImg={MEDIASOURCE.image08} /></li>
        <li className='section'><TitleComponent  
                                  icon={MEDIASOURCE.gifts}
                                  title='Regalos'
                                  description={<span>Tu presencia es nuestro mejor regalo, pero si es tu voluntad hacernos un regalo, dejamos a tu disposición nuestros datos</span>}
                                  /></li>                          
        <li className='section'> <BankAccount /> </li>
        <li className='section'> <TextComponent 
                                  information='Mesas De Regalos'/> </li>
        <li className='section'> <ButtonComponent  
                                  bottonName='Amazon'
                                  idButton='amazonButton'
                                  onClick={getAmazonGiftTable}/> </li>
        <li className='section'> <ButtonComponent  
                                  bottonName='Liverpool'
                                  idButton='liverpoolButton'
                                  onClick={getLiverpoolGiftTable}/> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image10}
                                  rightImg={MEDIASOURCE.image02} /></li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.confirmation}
                                  title='Confirmación'
                                  description=''/> </li>
        <li className='section'> <ConfirmationForm /> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image03}
                                  rightImg={MEDIASOURCE.image11} /></li>
      </ul>
    </>
  )
}

export default App;

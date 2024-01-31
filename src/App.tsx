import { useState } from 'react'
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
// import TextBoxComponent from './components/textBox/textBox';
// import ComboBoxComponent from './components/comboBox/comboBox';
import MEDIASOURCE from './sourcesConstants';
import {  getAmazonGiftTable, getLiverpoolGiftTable, getLocationMap, 
          getMercadoLibreGiftTable  } from './components/generalFunctions';
// import { addListConfirmation } from './components/button/addListConfirmation';

// Testing
import ConfirmationForm from './components/confirmationForm/confirmationForm';

function App() {
  // const [inputValue, setInputValue] = useState<string>('');

  // const [selectedValue, setSelectedValue] = useState<string>('');

  // const handleInputValue = (value: string) => {
  //   setInputValue(value);
  // };

  // const handleSelectValue= (value: string) => {
  //   setSelectedValue(value);
  // };

  // const credentials = {
  //   token: import.meta.env.VITE_GITHUB_TOKEN as string,
  //   repositoryOwner: import.meta.env.VITE_REPOSITORY_OWNER as string,
  //   repositoryName: import.meta.env.VITE_REPOSITORY_NAME as string,
  //   filePath: import.meta.env.VITE_REPOSITORY_FILE_PATH as string,
  // };

  // const notify = () => toast("This is a toast notification !");
  
  return (
    <>
      <ul>
        <li className='section'> <HeaderComponent  img={MEDIASOURCE.image01}/> </li>
        <li className='section'> <AudioComponent  audio={MEDIASOURCE.mainAudio}/> </li>
        <li className='section'> <InformationComponent  
                                  title='Estás invitando'
                                  message='Queremos que seas parte de este momento especial' /></li>
        <li className='section'> <TimerComponent  /> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image04}
                                  rightImg={MEDIASOURCE.image05} /></li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.rings}
                                  title='Ceremonia'
                                  description='San Blas, El Fuerte, Sinaloa'/> </li>
        <li className='section'> <DateComponent  
                                  day='9 Marzo'
                                  hour='16:00'/> </li>
        <li className='section'> <TextComponent 
                                  information='El puente colorado'/> </li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.wine}
                                  title='Celebración'
                                  description='San Blas, El Fuerte, Sinaloa'/> </li>
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
                                 description='Por respeto a la novia, no usar los siguientes colores'
                                 /></li>
        <li className='section'> <ColorsComponent  /> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image09}
                                  rightImg={MEDIASOURCE.image08} /></li>
        <li className='section'><TitleComponent  
                                  icon={MEDIASOURCE.gifts}
                                  title='Regalos'
                                  description='Tu presencia es nuestro mejor regalo, pero si es tu voluntad hacernos un regalo, 
                                  dejamos a tu disposición nuestros datos'
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
        <li className='section'> <ButtonComponent  
                                  bottonName='Mercado Libre'
                                  idButton='mercadoLibreButton'
                                  onClick={getMercadoLibreGiftTable}/> </li>
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image10}
                                  rightImg={MEDIASOURCE.image02} /></li>
        <li className='section'> <TitleComponent  
                                  icon={MEDIASOURCE.confirmation}
                                  title='Confirmación'
                                  description=''/> </li>
        <li className='section'> <ConfirmationForm /> </li>
        {/* <li className='section'> <TextBoxComponent 
                                  idTextBox='tbName'
                                  placeholder='Nombre Completo'
                                  onInputChange={handleInputValue} /> </li>
        <li className='section'> <ComboBoxComponent 
                                  idSelect='confirmationSelect'
                                  placeholder='Confirmación' 
                                  onInputChange={handleSelectValue}/> </li>
        <li className='section'> <ButtonComponent  
                                  bottonName='Enviar Respuesta'
                                  idButton='confirmationButton'
                                  onClick={() => addListConfirmation(inputValue, selectedValue, credentials)}/> </li> */}
        <li className='section'> <GallerySeparatorComponent  
                                  leftImg={MEDIASOURCE.image03}
                                  rightImg={MEDIASOURCE.image11} /></li>
      </ul>
    </>
  )
}

export default App;

import {FC} from 'react';
import './gallerySeparator.css';
import {showImageFullScreen} from './gallerySeparatorScript';

const gallerySeparator: FC<{leftImg: string, rightImg: string}> = ({leftImg, rightImg}) => {
    return (
        <>
        <div className='gallerySeparatorContainer'>
            <img className='imageGallery' src={leftImg} alt="" 
            onClick={() => showImageFullScreen(leftImg)}/>
            <img className='imageGallery' src={rightImg} alt="" 
            onClick={() => showImageFullScreen(rightImg)}/>
        </div>
        {/* Fullscreen Container */}
        <div className="fullscreenImageContainer" id="fullscreenImageContainer">
            <img id="fullscreenImage" src="" alt="Imagen en pantalla completa" />
        </div>
        </>
    );
};

export default gallerySeparator;
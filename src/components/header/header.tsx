import { FC } from 'react';
import './header.css';

const header: FC<{img: string}> = ({img}) => {    
    return (
        <>
        <div className="headerContainer">
            <img className="headerImgContainer" src={img} alt="" />
            <div>
                <h1 className='headerTitleContainer'>Alejandra & Joel Isaac</h1>
            </div>
        </div>
        </>
    );
}

export default header;
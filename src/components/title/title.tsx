import React, { FC } from 'react';
import './title.css';

const title: 
    FC <{icon: string, title: string, description: React.ReactNode}> = 
    ({icon, title, description}) => {
    return (
        <>
        <div className='sectionContainer'>
            <div className='eventDescription'>
                <div className='placeImage'>
                    <img src={icon} alt="" />
                </div>
                <div className='placeDescription'>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default title;
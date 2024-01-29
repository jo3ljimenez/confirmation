import React, { useEffect } from 'react';
import '../circle.css';
import calcualteWeddingDay from './timerScript';


const timerSection: React.FC = () => {
    useEffect(() => {
        calcualteWeddingDay();
    }, []);

    return (
        <>
        <div className='mainContiner'>
            <div className='circleContainer'>
                <div className="circleSectionContainer">
                    <div className="circle">
                        <h2 id="days">0</h2>
                    </div>
                    <h4>Días</h4>
                </div>
                <div className="circleSectionContainer">
                    <div className="circle">
                        <h2 id="hours">0</h2>
                    </div>
                    <h4>Horas</h4>
                </div>
                <div className="circleSectionContainer">
                    <div className="circle">
                        <h2 id="minutes">0</h2>
                    </div>
                    <h4>Minutos</h4>
                </div>
                <div className="circleSectionContainer">
                    <div className="circle">
                        <h2 id="seconds">0</h2>
                    </div>
                    <h4>Segundos</h4>
                </div>
            </div>
            <h1 id='weddingDayMessage'></h1>
        </div>
        </>
    );
};

export default timerSection;
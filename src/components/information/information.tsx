import { FC } from 'react';
import './information.css'

const informationSection: FC <{title: string, message: string}> = 
                                ({message, title}) => {
    return (
        <>
        <div className='informationContainer'>
            <h1>{title}</h1>
            <h2>{message}</h2>
        </div>
        </>
    );
}

export default informationSection

import { FC } from 'react';
import './text.css';

const text: FC <{information: string}> = ({information}) => {
    return (
        <>
        <div className='sectionContainer'>
            <h2>{information}</h2>
        </div>
        </>
    );
}

export default text;

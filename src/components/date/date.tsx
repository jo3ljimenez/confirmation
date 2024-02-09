import { FC } from 'react'
import './date.css'

const date: FC <{day: string, hour: string}> = 
                        ({day, hour}) => {
    return (
        <>
        <div className='sectionDateContainer'>
            <div className='eventDate'>
                <div className='enventDay'>
                    <h2 id='eventDay'>{day}</h2>
                </div>
                <div className='separator' />
                <div className='eventHour'>
                    <h2 id='eventHour'>{hour}</h2>
                </div>
            </div>
            <div className='enventDay'>
                <h2 id='eventDay'>2024</h2>
            </div>
        </div>
        </>
    )
}

export default date
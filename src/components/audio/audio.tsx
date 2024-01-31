import './audio.css';

const AudioSection: React.FC <{audio: string}> = ({audio}) => {
    return(
        <>
        <div className='audioContainer'>
            <audio autoPlay>
                <source src={audio} type="audio/mp3" />
            </audio>
        </div>
        </>
    );
}

export default AudioSection;
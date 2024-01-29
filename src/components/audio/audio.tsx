import './audio.css';

const AudioSection: React.FC <{audio: string}> = ({audio}) => {
    return(
        <>
        <div className='audioContainer'>
            <audio controls autoPlay>
                <source src={audio} type="audio/mp3" />
            </audio>
        </div>
        </>
    );
}

export default AudioSection;
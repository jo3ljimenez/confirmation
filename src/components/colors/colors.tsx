import '../circle.css'

const colorSection = () => {
    const whiteCircle = {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 3px 0px' 
    };

    const champagneCircle = {
        backgroundColor: '#F5F5DC',
        boxShadow: '0px 0px 3px 0px' 
    };

    const beigeCircle = {
        backgroundColor: '#F7E7CE',
        boxShadow: '0px 0px 3px 0px' 
    };
    
    return(
        <>
        <div className='mainContiner'>
            <div className='circleContainer'>
                <div className="circleSectionContainer">
                    <div className="circle" style={whiteCircle} />
                    <h4>Blanco</h4>
                </div>
                <div className="circleSectionContainer">
                    <div className="circle" style={champagneCircle} />
                    <h4>Champagne</h4>
                </div>
                <div className="circleSectionContainer">
                    <div className="circle" style={beigeCircle} />
                    <h4>Beige</h4>
                </div>
            </div>
            <h1 id='weddingDayMessage'></h1>
        </div>
        </>
    );
}

export default colorSection
import React from 'react'


const TypePlayingMusick = ({changeRandom , handleRepeatTrack, random , repeat}) => {

    let opacityRandom = random ? {opacity: '1' } : {}
    let opacityRepeat = repeat ? {opacity: '1' } : {}
    return (
        <div className='Player__btn-box'>
            <button className='repeat Player__btn' onClick={handleRepeatTrack} style={opacityRepeat}></button>
            <button className='shuffle Player__btn' onClick={changeRandom} style={opacityRandom}></button>
        </div>
    )
}

export default TypePlayingMusick
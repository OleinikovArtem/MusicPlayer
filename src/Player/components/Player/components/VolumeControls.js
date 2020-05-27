import React from 'react'
// import { changeProgressBar } from 'react'

const VolumeControls = ({handleMutedTrack, mute, changeVolume, volume}) => {
    const typeBtn = ['VolumeControls']
    let width = {
        width: volume * 100 +'%'
    }

    if(mute) {
        typeBtn.push('VolumeControls__btn-muted')
        width.width =  '0%' 
    }

    return (
        <div className={typeBtn.join(' ')}>
            <button className='VolumeControls__btn' onClick={handleMutedTrack}></button>
            <div className='VolumeControls__status-bar' onClick={changeVolume}>
                <div className="VolumeControls__status" style={width}></div>
            </div>
        </div>
    )
}

export default VolumeControls
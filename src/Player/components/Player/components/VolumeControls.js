import React from 'react'
import { connect } from 'react-redux'
import { VOLUME_OF, VOLUME_CHANGE }  from '../../../../store/types'

const VolumeControls = ({handleMutedTrack, muted, changeVolume, volume}) => {
    const typeBtn = ['VolumeControls']
    let width = {
        width: volume * 100 +'%'
    }

    if(muted) {
        typeBtn.push('VolumeControls__btn-muted')
        width.width =  '0%' 
    }

    return (
        <div className={typeBtn.join(' ')}>
            <button className='VolumeControls__btn' onClick={handleMutedTrack}></button>
            <div className='VolumeControls__status-bar' onClick={(e)=>changeVolume(e)}>
                <div className="VolumeControls__status" style={width}></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        volume: state.volume,
        muted: state.muted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleMutedTrack: () => dispatch({type: VOLUME_OF}),
        changeVolume: (e) => dispatch({type: VOLUME_CHANGE, event: e})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls)
import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_PLAY_TRACK, PLAY } from '../../../../store/types'

const Controls = ({play, prevrack,nextTrack , playing  }) => {

    let IMG = playing ? 'Pause' : 'Play'
    return (
        <div className='Track__controls'>
            <button className='Track__prevTrack'
            onClick={prevrack}
            ></button>
            <button className={`Track__${IMG}`}
            onClick={play}
            ></button>
            <button className='Track__nextTrack'
            onClick={nextTrack}
            ></button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playTrack: state.playTrack,
        playing: state.playing
    }
}

const mapDispatchToProps = discpath => {
    return {
        play : () => discpath({type: PLAY}),
        nextTrack: () => discpath({type: CHANGE_PLAY_TRACK, increment: '+' }),
        prevrack: () => discpath({type: CHANGE_PLAY_TRACK, increment: '-'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Controls)
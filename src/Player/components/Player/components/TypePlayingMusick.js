import React from 'react'
import { connect } from 'react-redux'
import { TYPE_REPEAT ,TYPE_RANDOM} from '../../../../store/types'


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

const mapStateToProps = state => {
    return {
        random: state.random,
        repeat: state.repeat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRepeatTrack: ()=> dispatch({type: TYPE_REPEAT }),
        changeRandom: ()=> dispatch({type:TYPE_RANDOM })
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TypePlayingMusick)
import React, {Fragment} from 'react'
import { connect } from 'react-redux'

const TrackInfo = ({playTrack : { image, Track ,artist}}) => {

    return(
    <Fragment >
        <div className="TrackInfo__image">
            <img src={image} alt=""/>
        </div>
        <div className='TrackInfo__text'>
            <div className="TrackInfo__track">
                {Track}
            </div>
            <div className="TrackInfo__artist">
                {artist}
            </div>
         </div>
    </Fragment>
)
}


const mapStateToProps = state => {
    return {
        ...state,
        playTrack: state.playTrack
    }
}
const mapDispatchToProps = dispatch => {
    return { 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackInfo)
import React from 'react'
import { connect } from 'react-redux'

const GaleryItem = ({id , artist, Track, image ,changeTrak} ) => (
    <div style={{
        background: `center / cover no-repeat url(${image}) `, 
        width:'100%', 
        height: '100%'}} > 
        <div className="Galery__item-mask">
            <div className="Galery__item-text">
                <span className='Galery__item-artist'>{artist}</span>
                <span className='Galery__item-track'>{Track}</span>
            </div>
            <button onClick={()=> changeTrak(id)} className='Galery__item-play'></button>
            <div className='Galery__item-info'>
                <ul>
                    <li className="heards "></li>
                    <li className="heards "></li>
                    <li className="heards "></li>
                    <li className="heards "></li>
                    <li className="heards "></li>
                </ul>

                <span className='rating'>{id< 10 ? `#0${id}` : `#${id}`}</span>
            </div>
        </div>
    </div>
)
const mapStateToProps = state => {
    return {
        playTrack: state.playTrack
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeTrak: (id) => dispatch({type: 'changeTrak', id: id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GaleryItem)
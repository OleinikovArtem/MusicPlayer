import React,{useContext} from 'react'
import {connect} from 'react-redux'
const DropList = ({ trackList, changeTrak}) => {

    return (
    <ul className="dropList">
        { 
            trackList.map(({Track, artist, id, } , i) => (
                <li className='dropList__item' 
                    key={id}
                    onClick={()=> {changeTrak(id)}}>
                        {artist} - {Track}
                </li>
                ) )
        }
    </ul>
    )
}
const mapStateToProps = state => {
    return {
        trackList: state.trackList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeTrak: (id) => dispatch({type: 'changeTrak', id: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropList)
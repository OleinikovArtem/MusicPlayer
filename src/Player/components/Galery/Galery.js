import React  from 'react'
import { connect } from 'react-redux'
import './Galery.css'

import GaleryItem from './GaleryItem'


const Galery = ({searchTrackList, theСhoiceTrack}) => {

    return (
        <ul className='Galery'>
            { 
                searchTrackList.map(el => (
                    <li key={el.id} className='Galery__item'>
                         <GaleryItem {...el} />
                    </li>
                ))
            }
        </ul>
    )
}
const mapStateToProps = state => {
    return {
        searchTrackList: state.searchTrackList
    }
}


export default connect(mapStateToProps,null)(Galery)

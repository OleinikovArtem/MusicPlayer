import React, { useRef } from 'react'
import { connect } from 'react-redux'
import './SearchPanel.css'
import iconSearch from './search67.png'


const SearchPanel = ({searchTrack}) => {
    const ref = useRef()
    return (
        <form className='SearchPanel'>
            <input type="text" 
                placeholder='Search' 
                className='search' 
                ref={ref}
                onChange={(e)=> {searchTrack(e.target.value)}}/>
            <button className='search__btn'>
                <img src={iconSearch} alt="icon-search"/>
            </button>
        </form>
    )
}


const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchTrack: (val) => dispatch({type: 'search', value: val})
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(SearchPanel)
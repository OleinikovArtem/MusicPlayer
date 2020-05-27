import React from 'react'
import './ListItem.css'

const ListItem = ({url, title}) => {
    return (
        <div className='ListItem'>
            <div style={{marginRight: '15px', width: '25px', textAlign:'center',}}>
                <img src={url} alt={url ? title : '' } className='ListItem__img'/> 
            </div>
            <div className='ListItem__title'>{title}</div>
        </div>
    )
}

export default ListItem
import React from 'react'
import './User.css'
import Avatar from './avatar.png'

const User = () => {
    return (
        <div className='User'>
            <img src={Avatar} alt="avatar" className='User__avatar'/>
            <div className="User__block">
                <div className="User__name">Oliver Bone</div>
                <span className='User__count'>296 days</span>
            </div>
        </div>
    )
}

export default User
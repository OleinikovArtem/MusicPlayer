import React from 'react'
import './Header.css'
import Logo from '../UI/Logo/Logo'
import User from '../UI/User/User'
import SearchPanel from '../SearchPanel/SearchPanel'


const Header = () => {
    return (
        <header className='Header'>
            <div className="sideBox">
                <Logo/>
            </div>
            <div className='middleHeader'>
                <User/>
                <SearchPanel />
            </div>
            <div className='sideBox'>

            </div>
        </header>
    )
}

export default Header
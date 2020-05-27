import React from 'react'


import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Player from './components/Player/Player'
import { connect } from 'react-redux'


const App = () => {
    return (
            <div className='PlayerApp'>
                <Header />
                <Main />
                <Player />
            </div>
    )

}

export default App


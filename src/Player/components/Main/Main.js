
import React, { useState, useEffect } from 'react'
import './Main.css'

import CategoryList from '../CategoryList/CategoryList'
import Statistic from '../Statistic/Statistic'
import Playlists from '../Playlists/Playlists'
import Galery from '../Galery/Galery'

import Banner from '../../images/Galery/_Banner.jpg'



const Main = () => {
    const [showSidebar, setShowSidebart] = useState({
        left: false,
        right: false,
        mobV: window.innerWidth < 851 ? true : false,
    })

    let showLeft = showSidebar.left ? {left: 0 } : {}
    let showRight = showSidebar.right ? {right: 0 } : {}


    const handleShowSidebar = (type, e) => {
        let typeAny = type === 'left' ? 'right' : 'left'

        setShowSidebart((prevState) => ({
            ...prevState,
            [type]: !showSidebar[type],
            [typeAny]: showSidebar.left ? false : false,
        }))
    }
    
  
    useEffect(() => {
        console.log('useEffect')   
    })
    return (
        <main className='Main'>
            <div className='Main__sidebar' style={showLeft}>
                <CategoryList/>
                <Statistic/>
            </div>

            {showSidebar.mobV ? (
                <ButtonSidebar 
                    type='left' 
                    content='&gt;' 
                    cliked={handleShowSidebar}
                    isActive={showSidebar.left}
                    /> ) 
                : null
            }


            <div className='Main__main'>
                <img src={Banner} alt=""  style={{maxWidth: '100%'}}/>
                <Galery />
            </div>

            {showSidebar.mobV ? (
                <ButtonSidebar 
                    type='right'
                    content='&lt;'
                    cliked={handleShowSidebar}
                    isActive={showSidebar.right}
                    /> ) 
                : null
            }

            <div className='Main__sidebar'style={showRight} >
               <Playlists />
            </div>
        </main>
    )
}

export default Main

function ButtonSidebar ({type, content, isActive, cliked = ()=>{} }) {

    let active = isActive ? 'active' : ''

    let text = isActive ? 'x' : content

    return (
        <button
            className={`SidebarOpenBtn SidebarOpenBtn_${type} ${active}`}
            onClick={(e)=>cliked(`${type}`,e)}
            >{ text }
        </button>
)}
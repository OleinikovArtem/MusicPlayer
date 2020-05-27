import React, {useState,} from 'react'
import './Playlists.css'


import iconPlaylists from '../../images/icons/icon-folder.png'
import ListItem from '../UI/ListItem/ListItem'
import DropList from './Droplist'

const initialState =  [
    {text: 'RHPC', show: false},
    {text: 'RHINDIEPC', show: true},
    {text: 'AWESOME', show: false},
    {text: 'HARDCORE', show: false},
    {text: 'OLDSHCOOL', show: false},
    {text: 'BEAST', show: false},
]
const Playlists = ({ theСhoiceTrack}) => {
    const [state, setState] = useState(initialState)

    const handleDropdown = (index) => { 
        const updateState = state.map((el, i) => {
            index === i ? el.show = true : el.show = false 
            return el
        })
        setState(updateState)
    }

    return (
        <ul className='Playlists'>
            <li><ListItem title='Playlists' url={iconPlaylists} /></li>
            {
                state.map(({text, show}, i) => {
                    let Droped = show ? <DropList  theСhoiceTrack={theСhoiceTrack} /> :  null
                    return (
                        <li key={text+i} onClick={ ()=> handleDropdown(i)}>
                            <ListItem title={text} url={''} />
                            {Droped}
                        </li>
                    )       
                })
            }
        </ul>
    )
}

export default Playlists
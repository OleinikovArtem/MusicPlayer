import React, { useState } from 'react'
import './CategoryList.css'
import img1 from '../../images/icons/icon-wave.png'
import img2 from '../../images/icons/icon-note.png'
import img3 from '../../images/icons/icon-heard.png'
import img4 from '../../images/icons/icon-metal.png'
import img5 from '../../images/icons/icon-random.png'
import img6 from '../../images/icons/icon-online.png'
import img7 from '../../images/icons/icon-microphone.png'
// import img8 from '../../images/icons/Shuffle-24.svg'
import ListItem from '../UI/ListItem/ListItem'

const initialState = [
    {title: 'top songs', img: img1},
    {title: 'recomended', img: img2},
    {title: 'most heard', img: img3},
    {title: 'song of the day', img: img4},
    {title: 'random song', img: img5},
    {title: 'communities', img: img6},
    {title: 'radio', img: img7},
]

const CategoryList = () => {
    const [list] = useState(initialState)

    return (
        <ul className='CategoryList'>
            { list.map(({title, img}, index) => (
                <li key={title + index}>
                    <ListItem title={title} url={img} />
                </li>
            ))}
        </ul>
    )
}

export default CategoryList
import React from 'react'
import cls from './Toolbar.module.css'

const Toolbar = ({active, clicked}) => {
    
    return (
        <button className={cls.btn} onClick={clicked}>
            <span className={cls.line}></span>
        </button>
    )
}

export default Toolbar
import React from 'react'
import cls from './RedBox.module.css'

const RedBox = ({title, subtitle,color = '#f23005'}) => {
    return (
        <div className={cls.wrap} style={{background: color}}>
            <strong className={cls.title}>{title} </strong> 
            <span className={cls.subtitle}>{subtitle}</span>
        </div>
    )
}

export default RedBox
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import cls from './Counter.module.css'

const Counter = ({total, text}) => {
    const style = {
        num: { fontSize: '64px', fontWeight: '300'},
        text: {fontSize: '16px' }
    }
    if(window.innerWidth < 900) {
        style.num.fontSize = '40px'
    }
    let time = 4000
    const [num , setNum] = useState({
        start: 0,
        finish: total
    })
    

    useEffect(() => {
        const numAnimate = setInterval(() => {
            setNum((prevState)=> {
                if(prevState.start >= total){
                    return {
                        start: total
                    }
                }
                else {
                    let plus = 1 
                    if(total > 1000) plus = 5
                    if(total > 5000) plus = 11
                    if(total > 10000) plus = 32

                    return {
                    start: prevState.start + plus
                }
                }
            })
            if(num.finish === total) {
            }
        },  Math.round(time / total))
        return () =>  clearInterval(numAnimate)
    }, [num.finish])


    return (
        <div className={cls.Counter}>
            <div style={style.num}>{num.start}</div>
            <div style={style.text}>{text}</div>
        </div>
    )
}

Counter.propTypes = {

    text: PropTypes.string
}


export default Counter

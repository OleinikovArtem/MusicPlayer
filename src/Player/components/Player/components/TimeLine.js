import React  from 'react'



const TimeLine = ({fullTime,progresTime,changeCurrentTime }) => {
    const {minutes, seconds} = fullTime
    const timeOneProc = (minutes*60 + seconds) / 100
    const progres = (progresTime.minutes*60 + progresTime.seconds ) / timeOneProc
    

    return (
        <div className='TimeLine'>
            <div className="TimeLine__time">
                { progresTime.minutes }:{ progresTime.seconds+2 > 9 ? progresTime.seconds+2 : '0'+(progresTime.seconds+2) }
            </div>
            <div className='TimeLine__progres-bar' onClick={ changeCurrentTime}>
                <div className='TimeLine__progres' style={{width: progres +'%'}}></div>
            </div>
            <div className="TimeLine__lenght">{minutes}:{seconds > 9 ? seconds : '0'+seconds} </div>

        </div>
    )
}

export default TimeLine
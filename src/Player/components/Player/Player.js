import React , {useState,  useCallback, }from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux'; 
import { CHANGE_PLAY_TRACK } from '../../../store/types'
import { changeProgressBar , transformTime} from '../../../store/reducer';
import './Player.css'

import VolumeControls from './components/VolumeControls';
import TypePlayingMusick from './components/TypePlayingMusick';
import TimeLine from './components/TimeLine';
import Controls from './components/Controls';
import TrackInfo from './components/TrackInfo';

const Player = ({playTrack, playing, playNextTrack, repeat, muted, volume}) => {
    const [state , setState] = useState({
        fullTime: {
            minutes: '--',
            seconds: '--',
        },
        progresTime:'--',
    })
    
    const {  id, url} = playTrack 
    const TimeList = useCallback((node)=> {
        if(node) {
            const current = node.audioEl.current
            const duration = current.duration
            const currentTime = current.currentTime
             
            if(playing) {
                current.play()
            }else {
                current.pause()
            }
            
            setTimeout(() => {
                watchCurrentTime(duration, currentTime)
            },100)
        }
    })

    const watchCurrentTime  = (duration, currentTime) => {
        setState((prevState) => {
            const fullTime = transformTime(duration)
            const progresTime = transformTime(currentTime)
            
            return { ...prevState,  fullTime,  progresTime  }
        })  
    }


    const changeCurrentTime = (e) => {
        const audio =  document.querySelector('.react-audio-player')
        const x = changeProgressBar(e)
        const oneProcent = (state.fullTime.minutes * 60 + state.fullTime.seconds) / 100
        const nowTimeClick = oneProcent * x
        
        audio.currentTime = nowTimeClick
    }
    
    return (
        <div className="Player">
              <ReactAudioPlayer style={{position: 'absolute', top: '-200%'}}
                    src={url}
                    autoPlay
                    loop={repeat}
                    muted={muted}
                    volume={volume}
                    ref={  TimeList }
                    onEnded={()=> {playNextTrack(id)}}
                    />

                    
            <div className='TrackInfo'>
                <TrackInfo/>
            </div >
            <div className='TimeLine-controls'>
                <Controls />

                 <TimeLine 
                    fullTime={state.fullTime} 
                    progresTime={state.progresTime} 
                    changeCurrentTime={changeCurrentTime}
                    />

                <TypePlayingMusick />
            </div>
                <VolumeControls />
        </div>
    )
}

const mapStateToProps = state => {

    return {
        playTrack: state.playTrack,
        playing: state.playing,
        volume: state.volume,
        repeat: state.repeat,
        muted: state.muted,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        playNextTrack: (id) => dispatch({type: CHANGE_PLAY_TRACK , id: id}) 

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)

                    // onPlay	    Noop	Вызывается, когда начинается аудио или возобновляется воспроизведение
                    // OnPause	    Noop	Вызывается, когда звук приостановлен
                    // onVolume	    Noop	Вызывается при изменении громкости
                    // OnStop	    Noop	Вызывается, когда звук остановлен
                    // onLoad	    Noop	Вызывается, когда аудио загружается (буферизируется)
                    // onLoadError	Noop	Вызывается при возникновении ошибки при попытке загрузки носителя.
                    // onEnd	    Noop	Вызывается, когда воспроизведение заканчивается
                    
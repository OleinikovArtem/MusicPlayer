import React , {useState,  useCallback, }from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux'; 
import './Player.css'
import { transformTime } from '../../Store/transformTime';
import { changeProgressBar } from '../../Store/changeProgresBar';
import VolumeControls from './components/VolumeControls';
import TypePlayingMusick from './components/TypePlayingMusick';
import TimeLine from './components/TimeLine';
import Controls from './components/Controls';
import TrackInfo from './components/TrackInfo';

const Player = ({playTrack, playNextTrack}) => {
console.log(playTrack)
    const [state , setState] = useState({
        playing: false,
        loaded: false,
        loop: false,
        mute: true,
        volume: 0.1,
        fullTime: {
            minutes: '--',
            seconds: '--',
        },
        progresTime:'--',
        repeat: false
    })
    
    const { Track, artist, id, image,  url} = playTrack 
    const TimeList = useCallback((node)=> {
        if(node) {
            const current = node.audioEl.current
            const duration = current.duration
            const currentTime = current.currentTime
             
            if(state.playing) {
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

    const handleMutedTrack = () => {
        setState((prevState) => {
            return {
                ...prevState,
                mute: !state.mute
            }
        })
    }

    const changeVolume = (e) => {
        const x = changeProgressBar(e) / 100
        setState((prevState)=> {
            return{ ...prevState, volume: x, mute: false}
        })
    }

    const changeCurrentTime = (e) => {
        const audio =  document.querySelector('.react-audio-player')
        const x = changeProgressBar(e)
        const oneProcent = (state.fullTime.minutes * 60 + state.fullTime.seconds) / 100
        const nowTimeClick = oneProcent * x
        
        audio.currentTime = nowTimeClick
    }
    
    const handleRepeatTrack = () => {
        setState((prevState) => ({
            ...prevState,
            repeat: !state.repeat
        }))
    }
    
    return (
        <div className="Player">
              <ReactAudioPlayer style={{position: 'absolute', top: '-200%'}}
                    src={url}
                    autoPlay
                    loop={state.repeat}
                    muted={state.mute}
                    volume={state.volume}
                    ref={TimeList}
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

                <TypePlayingMusick 
                    // changeRandom={changeRandom}
                    // random={context.random}
                    repeat={state.repeat}
                    handleRepeatTrack={handleRepeatTrack}
                    />
            </div>
                <VolumeControls 
                    handleMutedTrack={handleMutedTrack} 
                    mute={state.mute} 
                    changeVolume={changeVolume} 
                    volume={state.volume}
                    />
        </div>
    )
}

const mapStateToProps = state => {

    return {
        playTrack :state.playTrack
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playNextTrack: (id) => dispatch({type: 'CHANGE_PLAY_TRACK', id: id}) 

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
                    
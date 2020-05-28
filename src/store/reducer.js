import {PLAY_TRACK, 
    CHANAGE_RANDOM_TYPE,
    CHANGE_PLAY_TRACK,
    PLAY , SEARCH,
    CHANGE_THIS_TRACK , 
    TYPE_REPEAT,
    TYPE_RANDOM,
    VOLUME_OF, VOLUME_CHANGE } from './types'
import API from '../Player/Api/Api'

const TRACKS =  API.getData().tracks

const inititalState = {
    trackList : TRACKS || null,
    searchTrackList: TRACKS || null, 
    playTrack: TRACKS[0],
    random: false,
    playing: false,
    repeat: false,
    muted: false,
    volume: 0.1,
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case VOLUME_CHANGE: 
        const x = changeProgressBar(action.event) / 100
        console.log(x)
        return {...state, muted:false, volume: x }
        
        case VOLUME_OF: 
        console.log('VOLUME OFF')
        return {...state, muted: !state.muted} 

        case TYPE_RANDOM: 
        return {...state, random: !state.random }

        case TYPE_REPEAT: 
        return {...state, repeat: !state.repeat }

        case CHANGE_THIS_TRACK : 
            const trak = state.trackList.filter(el => el.id === action.id)[0]
            if(state.playTrack.id !== trak.id) {
                return {
                    ...state, 
                    playTrack: trak
                }
            }
            return {...state}

        case SEARCH: 
            const val = action.value.toLowerCase().trim()
            const udateTrackList = state.trackList.filter(item => {
                const {Track, artist} = item
                if(Track.search(val) !== -1 || artist.search(val) !== -1) {
                    return item
                }
            })
            return {
                ...state,
                searchTrackList: udateTrackList
            }

        case PLAY : 
            return {
                ...state, 
                playing: !state.playing
            }

        case PLAY_TRACK:
            return {
                ...state,
                playTrack: state.trackList.filter(trak => {
                    if(trak.id === action.id && state.playTrack.id !== action.id) {
                        return trak
                    }
                })
            };
            
        case CHANGE_PLAY_TRACK:
            let i = state.trackList.indexOf(state.playTrack)
            if(!state.random) {
                switch (action.increment) {
                    case '-':
                        --i 
                        if (i <= 0 ) i = state.trackList.length - 1 
                        break;
                    case '+':
                        if (i === state.trackList.length - 1   ) i = 0
                        ++i
                        break;
                    default : 
                }   
            }else {
                i = randomIndex(state.trackList.length)
            }
            return {
                ...state,
                playTrack: state.trackList[i]
            };

        case CHANAGE_RANDOM_TYPE: 
            return {
                ...state,
                random: !state.random
            }
        default:
            return state
    }
}

export default reducer


export function randomIndex(max = inititalState.trackList.length) {
    const random =  (Math.random() * 100).toFixed()
    if(random < max) {
        return random
    } else {
        return randomIndex(max)
    }
}

export function changeProgressBar(e) {
    const target = e.target
    const targetPosition = target.getBoundingClientRect()
    const OneProcent = target.offsetWidth / 100
    const containerClickPosition = Math.floor( (e.clientX - targetPosition.x) / OneProcent )

    return containerClickPosition
}
export const transformTime = (duration) => {
    const Time = Math.floor(duration)
    const second =  Time % 60
    const minutes = (Time - second) / 60
    return {minutes, seconds: Math.floor(second)}
}
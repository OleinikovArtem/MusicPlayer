import {PLAY_TRACK, 
    CHANAGE_RANDOM_TYPE,
    CHANGE_PLAY_TRACK } from './types'
import API from '../Player/Api/Api'

const TRACKS =  API.getData().tracks

const inititalState = {
    trackList : TRACKS || null,
    searchTrackList: TRACKS || null, 
    playTrack: TRACKS[0],
    random: false,
    playing: false,
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'changeTrak' : 
            const trak = state.trackList.filter(el => el.id === action.id)[0]
            if(state.playTrack.id != trak.id) {
                return {
                    ...state, 
                    playTrack: trak
                }
            }
            return {...state}
        case 'search': 
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
        case 'Play' : 
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

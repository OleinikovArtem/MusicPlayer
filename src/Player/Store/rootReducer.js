import  { combineReducers } from 'redux'
import { galeryReducer } from './galeryReducer'

export const rootReducer = combineReducers({

    player: galeryReducer,
})
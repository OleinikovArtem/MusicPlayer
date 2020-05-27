import React, { createContext, useReducer, useContext } from 'react'
import API from '../Api/Api'
import { TEST } from './types'

const data = API.getData()
const initialState = {
    ...data,
    playTrack: false,
    random: false
}
const StoreContext = createContext(initialState)

const Actions = {
    [TEST]: ()=> {console.log(TEST)}
};

const reducer = (state, action) => {
    const act = Actions[action.type];
    const update = act(state);
    return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={StoreContext}>
        {children}
      </StoreContext.Provider>
    );
  };

export const useStore = store => {
    const { state, dispatch } = useContext(StoreContext);
    // return { state, dispatch };
    return StoreContext
};

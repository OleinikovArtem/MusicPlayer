import API from '../Api/Api'

const initialState = {
    test: 'Test'
}

export const galeryReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY_THIS_TRACK':
            return console.log('PLAY_THIS_TRACK')
    
        default:
            const tracks =  API.getData()

            return {
                ...state,
                ...tracks
            }
    }

}


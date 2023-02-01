const initialState = {
    reactCounter: 0
}

const reactReducer = (state = initialState, action) => {
    switch(action.type) {
        case('SET_REACT'):
            return { ...state, reactCounter: action.payload.reactCounter }
        default:
            return state
    }
}

export const reactSet = reactCounter => {
    return {
        type: 'SET_REACT',
        payload: {
            reactCounter
        }
    }
}

export default reactReducer
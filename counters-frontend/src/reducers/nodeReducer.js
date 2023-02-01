const initialState = {
    nodeCounter: 0
}

const nodeReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_NODE':
            return { ...state, nodeCounter: action.payload.nodeCounter }
        // case 'INC':
        //     return { state, nodeCounter: state.nodeCounter + 1 }
        // case 'DEC':
        //     return { state, nodeCounter: state.nodeCounter - 1 }
        // case 'RESET':
        //     return { state, nodeCounter: 0 }
        default:
            return state
    }
}

export const nodeSet = nodeCounter => {
    return {
        type: 'SET_NODE',
        payload: {
            nodeCounter
        }
    }
}

export default nodeReducer
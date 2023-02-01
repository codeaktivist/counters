import nodeService from '../services/nodeService'

const initialState = {
    nodeCounter: 0
}

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NODE':
            return { ...state, nodeCounter: action.payload.nodeCounter }
        default:
            return state
    }
}

const nodeSet = nodeCounter => {
    return {
        type: 'SET_NODE',
        payload: {
            nodeCounter
        }
    }
}

export const nodeInit = () => {
    return async dispatch => {
        const counter = await nodeService.getCounter()
        dispatch(nodeSet(counter))
    }
}

export const nodeIncrement = () => {
    return async dispatch => {
        const counter = await nodeService.incrementCounter()
        dispatch(nodeSet(counter))
    }
}

export const nodeDecrement = () => {
    return async dispatch => {
        const counter = await nodeService.decrementCounter()
        dispatch(nodeSet(counter))
    }
}

export const nodeReset = () => {
    return async dispatch => {
        const counter = await nodeService.resetCounter()
        dispatch(nodeSet(counter))
    }
}

export default nodeReducer
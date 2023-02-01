import Counter from './components/Counter'
import { useEffect } from 'react'

import nodeService from './services/nodeService'
import { nodeSet } from './reducers/nodeReducer'

import { reactSet } from './reducers/reactReducer'

import { useSelector, useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    const allState = useSelector(n => n)
    console.log('allState: ', allState);
    const nodeCounter = useSelector(n => n.nodeCounter)
    const reactCounter = useSelector(n => n.reactCounter)

    useEffect(() => {
        nodeService.getCounter()
            .then(res => {
                dispatch(nodeSet(res))})
        dispatch(reactSet(0))
    }, [dispatch])

    const nodeIncrement = () => {
        nodeService.incrementCounter()
            .then(res => dispatch(nodeSet(res)))
    }

    const nodeReset = () => {
        nodeService.resetCounter()
            .then(res => dispatch(nodeSet(res)))
    }

    const nodeDecrement = () => {
        nodeService.decrementCounter()
            .then(res => dispatch(nodeSet(res)))
    }

    const reactIncrement = () => {
        dispatch(reactSet(reactCounter.reactCounter + 1))
    }

    const reactReset = () => {
        dispatch(reactSet(0))
    }

    const reactDecrement = () => {
        dispatch(reactSet(reactCounter.reactCounter - 1))
    }

    return (
        <>
            <Counter
                id='reactCounter'
                counter={reactCounter.reactCounter}
                onIncrement={reactIncrement}
                onReset={reactReset}
                onDecrement={reactDecrement}
            />
            <Counter
                id='nodeCounter'
                counter={nodeCounter.nodeCounter}
                onIncrement={nodeIncrement}
                onReset={nodeReset}
                onDecrement={nodeDecrement}
            />
        </>
    )
}

export default App
import Counter from './components/Counter'
import { useEffect } from 'react'

import { nodeInit, nodeIncrement, nodeDecrement, nodeReset } from './reducers/nodeReducer'

import { reactSet } from './reducers/reactReducer'

import { useSelector, useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    const node = useSelector(n => n.node)
    const react = useSelector(n => n.react)

    useEffect(() => {
        dispatch(nodeInit())
    }, [dispatch])

    return (
        <>
            <Counter
                id='reactCounter'
                counter={react.reactCounter}
                onIncrement={() => dispatch(reactSet(react.reactCounter + 1))}
                onReset={() => dispatch(reactSet(0))}
                onDecrement={() => dispatch(reactSet(react.reactCounter - 1))}
            />
            <Counter
                id='nodeCounter'
                counter={node.nodeCounter}
                onIncrement={() => dispatch(nodeIncrement())}
                onReset={() => dispatch(nodeReset())}
                onDecrement={() => dispatch(nodeDecrement())}
            />
        </>
    )
}

export default App
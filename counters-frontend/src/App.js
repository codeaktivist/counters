import ReactCounter from './components/Counter'
import { useState, useEffect } from 'react'
import nodeService from './services/nodeService'

const App = () => {
    const [react, setReact] = useState(0)
    const [node, setNode] = useState(0)

    useEffect(() => {
        nodeService.getCounter()
            .then(res => setNode(res))
    }, [])

    const nodeIncrement = () => {
        nodeService.incrementCounter()
            .then(res => setNode(res))
    }

    const nodeReset = () => {
        nodeService.resetCounter()
            .then(res => setNode(res))
    }

    const nodeDecrement = () => {
        nodeService.decrementCounter()
            .then(res => setNode(res))
    }


    const reactIncrement = () => {
        setReact(react + 1)
    }

    const reactReset = () => {
        setReact(0)
    }

    const reactDecrement = () => {
        setReact(react - 1)
    }
    
    return (
        <>
            <ReactCounter 
                id='reactCounter'
                counter={react}
                onIncrement={reactIncrement}
                onReset={reactReset}
                onDecrement={reactDecrement}
            />
            <ReactCounter
                id='nodeCounter'
                counter={node}
                onIncrement={nodeIncrement}
                onReset={nodeReset}
                onDecrement={nodeDecrement}
            />
        </>
    )
}

export default App
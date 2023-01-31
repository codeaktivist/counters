import { useState, useEffect } from "react"
import nodeService from '../services/nodeService'

const NodeCounter = () => {
    const [counter, setCounter] = useState('0')

    useEffect(() => {
        nodeService.getCounter()
            .then(res => setCounter(res))
    }, [])

    const onIncrement = () => {
        nodeService.incrementCounter()
            .then(res => setCounter(res))
    }

    const onReset = () => {
        nodeService.resetCounter()
            .then(res => setCounter(res))
    }

    const onDecrement = () => {
        nodeService.decrementCounter()
            .then(res => setCounter(res))
    }

    return (
        <div>
            Node Counter (Backend):
            <span data-testid="nodeCounter">{counter}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

export default NodeCounter
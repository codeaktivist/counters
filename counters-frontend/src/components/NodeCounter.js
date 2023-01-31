import { useState } from "react"

const NodeCounter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            Node Counter (Backend):
            <span data-testid="nodeCounter">{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )
}

export default NodeCounter
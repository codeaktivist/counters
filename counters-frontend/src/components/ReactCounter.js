import { useState } from "react"

const ReactCounter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            React Counter (Frontend):
            <span data-testid="reactCounter">{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )
}

export default ReactCounter
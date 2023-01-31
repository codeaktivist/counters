const NodeCounter = ({ id, counter, onIncrement, onReset, onDecrement }) => {
    return (
        <div>
            {id}:
            <span data-testid={id}>{counter}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

export default NodeCounter
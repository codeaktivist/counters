import PropTypes from 'prop-types';

const NodeCounter = ({ id, counter, onIncrement, onReset, onDecrement }) => {
  return (
    <div>
      {id}:
      <span data-testid={id}>{counter}</span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

NodeCounter.propTypes = {
  id: PropTypes.string,
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onReset: PropTypes.func,
  onDecrement: PropTypes.func
};

export default NodeCounter;
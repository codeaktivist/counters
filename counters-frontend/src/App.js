import Counter from './components/Counter';
import Environment from './components/Environment';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nodeInit, nodeIncrement, nodeDecrement, nodeReset } from './reducers/nodeReducer';
import { setCounter } from './reducers/reactReducer';


const App = () => {
  const dispatch = useDispatch();
  const nodeCounter = useSelector(n => n.nodeCounter);
  const reactCounter = useSelector(n => n.reactCounter);

  useEffect(() => {
    dispatch(nodeInit());
  }, [dispatch]);

  return (
    <>
      <Counter
        id='reactCounter'
        counter={reactCounter}
        onIncrement={() => dispatch(setCounter(reactCounter + 1))}
        onReset={() => dispatch(setCounter(0))}
        onDecrement={() => dispatch(setCounter(reactCounter - 1))}
      />
      <Counter
        id='nodeCounter'
        counter={nodeCounter}
        onIncrement={() => dispatch(nodeIncrement())}
        onReset={() => dispatch(nodeReset())}
        onDecrement={() => dispatch(nodeDecrement())}
      />
      <Environment />
    </>
  );
};

export default App;
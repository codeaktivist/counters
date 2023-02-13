import Counter from './components/Counter';
import Environment from './components/Environment';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nodeInit, nodeIncrement, nodeDecrement, nodeReset } from './reducers/nodeReducer';
import { cookieInit, cookieIncrement, cookieDecrement, cookieReset } from './reducers/cookieReducer';
import { redisInit, redisIncrement, redisDecrement, redisReset } from './reducers/redisReducer';
import { mongoInit, mongoIncrement, mongoDecrement, mongoReset } from './reducers/mongoReducer';

import { setCounter } from './reducers/reactReducer';

const App = () => {
  const dispatch = useDispatch();
  const reactCounter = useSelector(n => n.reactCounter);
  const cookieCounter = useSelector(n => n.cookieCounter);
  const nodeCounter = useSelector(n => n.nodeCounter);
  const redisCounter = useSelector(n => n.redisCounter);
  const mongoCounter = useSelector(n => n.mongoCounter);

  useEffect(() => {
    dispatch(nodeInit());
    dispatch(cookieInit());
    dispatch(redisInit());
    dispatch(mongoInit());
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
        id='cookieCounter'
        counter={cookieCounter}
        onIncrement={() => dispatch(cookieIncrement())}
        onReset={() => dispatch(cookieReset())}
        onDecrement={() => dispatch(cookieDecrement())}
      />
      <Counter
        id='nodeCounter'
        counter={nodeCounter}
        onIncrement={() => dispatch(nodeIncrement())}
        onReset={() => dispatch(nodeReset())}
        onDecrement={() => dispatch(nodeDecrement())}
      />
      <Counter
        id='redisCounter'
        counter={redisCounter}
        onIncrement={() => dispatch(redisIncrement())}
        onReset={() => dispatch(redisReset())}
        onDecrement={() => dispatch(redisDecrement())}
      />
      <Counter
        id='mongoCounter'
        counter={mongoCounter}
        onIncrement={() => dispatch(mongoIncrement())}
        onReset={() => dispatch(mongoReset())}
        onDecrement={() => dispatch(mongoDecrement())}
      />

      <Environment />
    </>
  );
};

export default App;
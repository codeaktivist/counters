import { configureStore } from '@reduxjs/toolkit';

import reactReducer from './reducers/reactReducer';
import nodeReducer from './reducers/nodeReducer';
import redisReducer from './reducers/redisReducer';
import mongoReducer from './reducers/mongoReducer';
import envReducer from './reducers/envReducer';

const store = configureStore({
  reducer: {
    reactCounter: reactReducer,
    nodeCounter: nodeReducer,
    redisCounter: redisReducer,
    mongoCounter: mongoReducer,
    env: envReducer
  }
});

export default store;
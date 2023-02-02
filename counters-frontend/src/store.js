import { configureStore } from '@reduxjs/toolkit';

import reactReducer from './reducers/reactReducer';
import nodeReducer from './reducers/nodeReducer';
import envReducer from './reducers/envReducer';

const store = configureStore({
  reducer: {
    reactCounter: reactReducer,
    nodeCounter: nodeReducer,
    env: envReducer
  }
});

export default store;
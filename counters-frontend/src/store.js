import { configureStore } from '@reduxjs/toolkit';

import reactReducer from './reducers/reactReducer';
import nodeReducer from './reducers/nodeReducer';

const store = configureStore({
  reducer: {
    reactCounter: reactReducer,
    nodeCounter: nodeReducer
  }
});

export default store;
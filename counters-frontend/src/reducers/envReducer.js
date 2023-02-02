import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  frontend: 'wait',
  backend: 'wait'
};

const envSlice = createSlice({
  name: 'env',
  initialState,
  reducers: {
    printBackend(state, action) {
      return {
        ...state,
        backend: action.payload.backend
      };
    },
    printFrontend(state, action) {
      return {
        ...state,
        frontend: action.payload.frontend
      };
    }
  }
});

export const getBackend = () => {
  return async dispatch => {
    const response = await axios
      .get('/api/env')
      .then(res => res.data);
    dispatch(printBackend({ backend: response }));
  };
};

export const getFrontend = () => {
  return async dispatch => {
    dispatch(printFrontend({ frontend: process.env.NODE_ENV }));
  };
};


export const { printBackend, printFrontend } = envSlice.actions;
export default envSlice.reducer;
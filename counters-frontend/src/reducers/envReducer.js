import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  frontend: 'wait',
  backend: 'wait',
  ip: 'wait',
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
    },
    printIp(state, action) {
      return {
        ...state,
        ip: action.payload.ip
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

export const getIp = () => {
  return async dispatch => {
    const response = await axios
      .get('/api/ip')
      .then(res => res.data);
    dispatch(printIp({ ip: response }));
  };
};


export const { printBackend, printFrontend, printIp } = envSlice.actions;
export default envSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    missionReducer,
  },
});

export default store;

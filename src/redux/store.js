import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import rocketReducer from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missionReducer,
  },
});

export default store;

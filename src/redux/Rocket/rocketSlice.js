import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRocketData = createAsyncThunk('getData', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data.map((rocket) => ({ ...rocket, reserved: false }));
});

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  status: false,
  reducers: {
    reserveRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    },
    cancelReserve: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.status = true;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.status = false;
        state.rockets = action.payload;
      })
      .addCase(getRocketData.rejected, (state) => {
        state.status = false;
      });
  },
});

export const { reserveRocket, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;

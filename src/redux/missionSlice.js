import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMission = createAsyncThunk('fetch/data', async () => {
  console.log('i am try');
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const data = response.data.map((e) => ({ ...e, isReserved: false }));
    return data;
  } catch (error) {
    return error.message;
  }
});
const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    mission: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    joinMission: (state, action) => {
      state.mission[action.payload].isReserved = true;
    },
    cancelMission: (state, action) => {
      state.mission[action.payload].isReserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mission = action.payload;
      });
  },
});
export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;

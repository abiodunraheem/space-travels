// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   loading: false,
//   error: '',
//   rockets: [],
// };

// export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
//   const response = await axios
//     .get('https://api.spacexdata.com/v3/rockets');
//   return response.data;
// });

// const rocketSlice = createSlice({
//   name: 'rocket',
//   initialState,
//   // reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchRockets.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchRockets.fulfilled, (state, action) => {
//       state.loading = false;
//       state.rockets = action.payload;
//       state.error = '';
//     });
//     builder.addCase(fetchRockets.rejected, (state, action) => {
//       state.loading = false;
//       state.rockets = [];
//       state.error = action.error.message;
//     });
//   },
// });

// const rocketReducer = rocketSlice.reducer;
// export default rocketReducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  rockets: [],
};

export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  const response = await axios
    .get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.rockets = [];
      state.error = action.error.message;
    });
  },
});

const rocketReducer = rocketSlice.reducer;
export default rocketReducer;

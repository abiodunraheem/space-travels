import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionListReducer';
import rocketReducer from './rocket/rocketListReducer';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});
export default store;

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slice/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
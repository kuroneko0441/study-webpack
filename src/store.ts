import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { counterSlice } from './features';

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;

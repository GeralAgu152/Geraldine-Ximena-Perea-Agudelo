import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import { thunks } from './thunks';
const triviaSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers,
});

export const actions = triviaSlice.actions;
export default triviaSlice.reducer;

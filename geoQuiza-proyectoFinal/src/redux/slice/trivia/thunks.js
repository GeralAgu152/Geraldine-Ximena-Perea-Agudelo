import { createAsyncThunk } from '@reduxjs/toolkit';
export const thunks = {
  fetchFlagWithName: createAsyncThunk(
    'trivia/fetchFlagData',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,flags'
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};

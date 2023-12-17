import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCharacters = createAsyncThunk(
    'characters/getCharacters',
    async () => {
      try {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`);
        return res.data; // Ensure characters are nested within the 'data' property
      } catch (error) {
        console.error('Error fetching characters:', error);
        throw error; // Propagate the error
      }
    }
  );
  
export const charactersSlice = createSlice({
    name : 'characters',
    initialState : {
items:[]
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
          console.log(action.payload);
        });
        builder.addCase(fetchCharacters.rejected, (state, action) => {
          console.error('Error fetching characters:', action.error.message);
        });
      }
      

    
})
export default charactersSlice.reducer;
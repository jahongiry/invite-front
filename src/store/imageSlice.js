import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  image: [],
  imageBirthday: [],
  error: '',
  data: [],
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  return axios
    .get('https://octopus-app-iohhm.ondigitalocean.app/image')
    .then((response) => {
      return response.data;
    });
});

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = false;
      let wedding = [];
      let birthday = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (action.payload[i][0].length > 1) {
          birthday.push(action.payload[i]);
        } else {
          wedding.push(action.payload[i]);
        }
      }
      state.image = wedding;
      state.imageBirthday = birthday;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { imageTransfer } = imageSlice.actions;
export default imageSlice.reducer;

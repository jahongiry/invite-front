import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  wedding: true,
  weddingCard: false,
  birthday: true,
  birthdayCard: false,
  birthdayForm: false,
  weddingForm: false,
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    chooseWedding: (state) => {
      state.birthday = false;
      state.wedding = true;
      state.birthdayCard = false;
      state.weddingCard = true;
    },

    chooseBirthday: (state) => {
      state.birthday = true;
      state.wedding = false;
      state.weddingCard = false;
      state.birthdayCard = true;
    },

    weddingForm: (state) => {
      state.birthdayForm = false;
      state.weddingForm = true;
    },

    birthdayForm: (state) => {
      state.birthdayForm = true;
      state.weddingForm = false;
    },
  },
});

export const { chooseWedding, chooseBirthday, weddingForm, birthdayForm } =
  typeSlice.actions;
export default typeSlice.reducer;
